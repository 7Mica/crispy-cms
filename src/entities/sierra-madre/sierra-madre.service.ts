import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { SierraMadreHeroSlide } from './enitities/sierra-madre-hero-slide.entity';
import { SierraMadreMainPage } from './enitities/sierra-madre-main-page.entity';
import { SierraMadreService as SMService } from './enitities/sierra-madre-service.entity';
import { SierraMadrePromo } from './enitities/sierra-madre-promo.entity';
import { SierraMadreMainPageInput } from './input/sierra-madre-main-page.input';
import { SierraMadreServiceInput } from './input/sierra-madre-service.input';
import { SierraMadrePromoInput } from './input/sierra-madre-promo.input';
import { SierraMadreHeroSlideInput } from './input/sierra-madre-hero-slide.input';

@Injectable()
export class SierraMadreService {
  constructor(
    @InjectRepository(SierraMadreHeroSlide)
    private smHeroSlideRepo: Repository<SierraMadreHeroSlide>,
    @InjectRepository(SierraMadrePromo)
    private smPromoRepo: Repository<SierraMadrePromo>,
    @InjectRepository(SMService)
    private smServiceRepo: Repository<SMService>,
    @InjectRepository(SierraMadreMainPage)
    private smMainPageRepo: Repository<SierraMadreMainPage>,
  ) {}

  public async deleteMainPage(mainPageId: string): Promise<DeleteResult> {
    return this.smMainPageRepo.delete(mainPageId);
  }

  public async newMainPage(
    mainPageInput: SierraMadreMainPageInput,
  ): Promise<SierraMadreMainPage> {
    const { services, promos, heroSlides, ...mainPage } = mainPageInput;
    const resumeEntity = this.smMainPageRepo.create(mainPage);
    const savedMainPage = await this.smMainPageRepo.save(resumeEntity);

    const serviceEntity = this.smServiceRepo.create(
      services.map((service: SierraMadreServiceInput) => {
        const { id, ...props } = service;

        return { ...props, mainPageId: savedMainPage.id };
      }),
    );

    await this.smServiceRepo.save(serviceEntity);

    const promoEntity = this.smPromoRepo.create(
      promos.map((promo: SierraMadrePromoInput) => {
        const { id, ...props } = promo;

        return { ...props, mainPageId: savedMainPage.id };
      }),
    );

    await this.smPromoRepo.save(promoEntity);

    const heroSlideEntity = this.smHeroSlideRepo.create(
      heroSlides.map((heroSlide: SierraMadreHeroSlideInput) => {
        const { id, ...props } = heroSlide;

        return { ...props, mainPageId: savedMainPage.id };
      }),
    );

    await this.smHeroSlideRepo.save(heroSlideEntity);

    return this.smMainPageRepo.findOne(savedMainPage.id, {
      relations: ['services', 'promos', 'heroSlides'],
    });
  }

  public async getDefaultMainPage(): Promise<SierraMadreMainPage> {
    const selectedMainPage = await this.smMainPageRepo.findOne({
      where: { selected: true },
      relations: ['services', 'promos', 'heroSlides'],
    });

    return selectedMainPage;
  }

  public async getMainPageServices(mainPageId: string): Promise<SMService[]> {
    const services = await this.smServiceRepo.find({
      where: {
        mainPageId,
      },
      order: { weight: 'ASC' },
    });

    return services;
  }

  public async getMainPagePromos(
    mainPageId: string,
  ): Promise<SierraMadrePromo[]> {
    const promos = await this.smPromoRepo.find({
      where: {
        mainPageId,
      },
      order: { weight: 'ASC' },
    });

    return promos;
  }

  public async getMainPageHeroSlides(
    mainPageId: string,
  ): Promise<SierraMadreHeroSlide[]> {
    const heroSlides = await this.smHeroSlideRepo.find({
      where: {
        mainPageId,
      },
      order: { weight: 'ASC' },
    });

    return heroSlides;
  }

  public async mainPageList(): Promise<SierraMadreMainPage[]> {
    const mainPageList = await this.smMainPageRepo.find({
      relations: ['services', 'promos', 'heroSlides'],
    });

    return mainPageList;
  }

  public async updateMainPage(
    mainPageId: string,
    mainPageInput: SierraMadreMainPageInput,
  ) {
    const { services, promos, heroSlides, ...mainPage } = mainPageInput;
    const mainPageToUpdate = await this.smMainPageRepo.findOne(mainPageId);

    mainPageToUpdate.houseNumber = mainPage.houseNumber;
    mainPageToUpdate.neighborhood = mainPage.neighborhood;
    mainPageToUpdate.city = mainPage.city;
    mainPageToUpdate.state = mainPage.state;
    mainPageToUpdate.zipCode = mainPage.zipCode;
    mainPageToUpdate.phoneNumber = mainPage.phoneNumber;
    mainPageToUpdate.selected = mainPage.selected;
    mainPageToUpdate.weight = mainPage.weight;

    if (mainPage.selected) {
      const previousMainPageSelected = await this.smMainPageRepo.findOne({
        where: { selected: true },
      });

      if (
        previousMainPageSelected &&
        previousMainPageSelected.id !== mainPageId
      ) {
        previousMainPageSelected.selected = false;
        this.smMainPageRepo.save(previousMainPageSelected);
      }
    }

    await this.smMainPageRepo.save(mainPageToUpdate);

    // Update Promos
    promos.forEach(async (promo: SierraMadrePromoInput) =>
      this.updateOrCreatePromo(promo, mainPageId),
    );

    // Update Hero Slides
    heroSlides.forEach(async (heroSlide: SierraMadreHeroSlideInput) =>
      this.updateOrCreateHeroSlide(heroSlide, mainPageId),
    );

    // Update Services
    services.forEach(async (service: SierraMadreServiceInput) =>
      this.updateOrCreateService(service, mainPageId),
    );
  }

  protected async updateOrCreateHeroSlide(
    heroSlide: SierraMadreHeroSlideInput,
    mainPageId: string,
  ) {
    if (heroSlide.hasOwnProperty('isNew') && heroSlide.isNew === true) {
      const { id, ...cleanHeroSlide } = heroSlide;

      const newHeroSlide = this.smHeroSlideRepo.create(cleanHeroSlide);
      newHeroSlide.mainPageId = mainPageId;

      await this.smHeroSlideRepo.save(newHeroSlide);
    }

    if (heroSlide.hasOwnProperty('isNew') && heroSlide.isNew === false) {
      const abilityToUpdate = await this.smHeroSlideRepo.findOne({
        where: { id: heroSlide.id },
      });

      abilityToUpdate.mobileImageUrl = heroSlide.mobileImageUrl;
      abilityToUpdate.smImageUrl = heroSlide.smImageUrl;
      abilityToUpdate.mdImageUrl = heroSlide.mdImageUrl;
      abilityToUpdate.lgImageUrl = heroSlide.lgImageUrl;
      abilityToUpdate.xlImageUrl = heroSlide.xlImageUrl;
      abilityToUpdate.xl2ImageUrl = heroSlide.xl2ImageUrl;
      abilityToUpdate.xl3ImageUrl = heroSlide.xl3ImageUrl;
      abilityToUpdate.weight = heroSlide.weight;

      await this.smHeroSlideRepo.save(abilityToUpdate);
    }
  }

  protected async updateOrCreatePromo(
    promo: SierraMadrePromoInput,
    mainPageId: string,
  ) {
    if (promo.hasOwnProperty('isNew') && promo.isNew === true) {
      const { id, ...cleanPromo } = promo;

      const newPromo = this.smPromoRepo.create(cleanPromo);
      newPromo.mainPageId = mainPageId;

      await this.smPromoRepo.save(newPromo);
    }

    if (promo.hasOwnProperty('isNew') && promo.isNew === false) {
      const promoToUpdate = await this.smPromoRepo.findOne({
        where: { id: promo.id },
      });

      promoToUpdate.description = promo.description;
      promoToUpdate.backgroundImage = promo.backgroundImage;
      promoToUpdate.weight = promo.weight;

      await this.smPromoRepo.save(promoToUpdate);
    }
  }

  protected async updateOrCreateService(
    serviceInput: SierraMadreServiceInput,
    mainPageId: string,
  ) {
    if (serviceInput.hasOwnProperty('isNew') && serviceInput.isNew === true) {
      const { id, ...cleanService } = serviceInput;

      const newCareer = this.smServiceRepo.create(cleanService);
      newCareer.mainPageId = mainPageId;

      await this.smServiceRepo.save(newCareer);
    }

    if (serviceInput.hasOwnProperty('isNew') && serviceInput.isNew === false) {
      const serviceToUpdate = await this.smServiceRepo.findOne({
        where: { id: serviceInput.id },
      });

      serviceToUpdate.title = serviceInput.title;
      serviceToUpdate.description = serviceInput.description;
      serviceToUpdate.mobileImageUrl = serviceInput.mobileImageUrl;
      serviceToUpdate.xlImageUrl = serviceInput.xlImageUrl;
      serviceToUpdate.xl2ImageUrl = serviceInput.xl2ImageUrl;
      serviceToUpdate.xl3ImageUrl = serviceInput.xl3ImageUrl;
      serviceToUpdate.weight = serviceInput.weight;

      await this.smServiceRepo.save(serviceToUpdate);
    }
  }
}
