import { InternalServerErrorException, UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql-auth.guard';
import { CommonResponse } from 'src/core/http/common.response';
import { SierraMadreHeroSlide } from './enitities/sierra-madre-hero-slide.entity';
import { SierraMadreMainPage } from './enitities/sierra-madre-main-page.entity';
import { SierraMadrePromo } from './enitities/sierra-madre-promo.entity';
import { SierraMadreService as SMServiceEntity } from './enitities/sierra-madre-service.entity';
import { SierraMadreMainPageInput } from './input/sierra-madre-main-page.input';
import { SierraMadreService } from './sierra-madre.service';

@Resolver(() => SierraMadreMainPage)
export class SierraMadreResolver {
  constructor(private smService: SierraMadreService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Int)
  public async deleteMainPage(
    @Args({ type: () => String, name: 'mainPageId', nullable: false })
    mainPageId: string,
  ) {
    const deleteResult = await this.smService.deleteMainPage(mainPageId);

    return deleteResult.affected;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SierraMadreMainPage)
  public newMainPage(
    @Args({
      type: () => SierraMadreMainPageInput,
      name: 'mainPageInput',
      nullable: false,
    })
    mainPageInput: SierraMadreMainPageInput,
  ) {
    return this.smService.newMainPage(mainPageInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [SierraMadreMainPage])
  public mainPageList() {
    return this.smService.mainPageList();
  }

  @Query(() => SierraMadreMainPage, { nullable: true })
  public getDefaultMainPage() {
    return this.smService.getDefaultMainPage();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommonResponse)
  public async updateMainPage(
    @Args({ type: () => String, name: 'mainPageId', nullable: false })
    mainPageId: string,
    @Args({
      type: () => SierraMadreMainPageInput,
      name: 'mainPageInput',
      nullable: false,
    })
    mainPageInput: SierraMadreMainPageInput,
  ) {
    try {
      await this.smService.updateMainPage(mainPageId, mainPageInput);

      const response: CommonResponse = {
        success: true,
      };

      return response;
    } catch (e) {
      throw new InternalServerErrorException(e, 'Something went wrong');
    }
  }

  @ResolveField(() => [SMServiceEntity])
  services(@Parent() mainPage: SierraMadreMainPage) {
    return this.smService.getMainPageServices(mainPage.id);
  }

  @ResolveField(() => [SierraMadreHeroSlide])
  heroSlides(@Parent() mainPage: SierraMadreMainPage) {
    return this.smService.getMainPageHeroSlides(mainPage.id);
  }

  @ResolveField(() => [SierraMadrePromo])
  promos(@Parent() mainPage: SierraMadreMainPage) {
    return this.smService.getMainPagePromos(mainPage.id);
  }
}
