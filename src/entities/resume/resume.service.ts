import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Ability } from './ability.entity';
import { Career } from './career.entity';
import { Hobby } from './hobby.entity';
import { AbilityInput } from './input/ability.input';
import { CareerInput } from './input/career.input';
import { HobbyInput } from './input/hobby.input';
import { ResumeInput } from './input/resume.input';
import { Resume } from './resume.entity';
import { Certification } from './certification.entity';
import { CertificationInput } from './input/certification.input';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
    @InjectRepository(Ability)
    private abilityRepository: Repository<Ability>,
    @InjectRepository(Certification)
    private certificationRepository: Repository<Certification>,
    @InjectRepository(Career)
    private careerRepository: Repository<Career>,
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>,
  ) {}

  public async deleteResume(resumeId: string): Promise<DeleteResult> {
    return this.resumeRepository.delete(resumeId);
  }

  public async deleteHobby(hobbyId: string): Promise<DeleteResult> {
    return this.hobbyRepository.delete(hobbyId);
  }

  public async deleteCareer(careerId: string): Promise<DeleteResult> {
    return this.careerRepository.delete(careerId);
  }

  public async deleteCertification(
    certificationId: string,
  ): Promise<DeleteResult> {
    return this.certificationRepository.delete(certificationId);
  }

  public async deleteAbility(abilityId: string): Promise<DeleteResult> {
    return this.abilityRepository.delete(abilityId);
  }

  public async newResume(resumeInput: ResumeInput): Promise<Resume> {
    const {
      careers,
      hobbies,
      abilities,
      certifications,
      ...resume
    } = resumeInput;
    const resumeEntity = this.resumeRepository.create(resume);
    const savedResume = await this.resumeRepository.save(resumeEntity);

    const abilityEntity = this.abilityRepository.create(
      abilities.map((ability: AbilityInput) => {
        const { id, ...props } = ability;

        return { ...props, resumeId: savedResume.id };
      }),
    );

    await this.abilityRepository.save(abilityEntity);

    const certificationEntity = this.certificationRepository.create(
      certifications.map((certification: CertificationInput) => {
        const { id, ...props } = certification;

        return { ...props, resumeId: savedResume.id };
      }),
    );

    await this.certificationRepository.save(certificationEntity);

    const careerEntity = this.careerRepository.create(
      careers.map((career: CareerInput) => {
        const { id, ...props } = career;

        return { ...props, resumeId: savedResume.id };
      }),
    );

    await this.careerRepository.save(careerEntity);

    const hobbyEntity = this.hobbyRepository.create(
      hobbies.map((hobby: HobbyInput) => {
        const { id, ...props } = hobby;

        return { ...props, resumeId: savedResume.id };
      }),
    );

    await this.hobbyRepository.save(hobbyEntity);

    return this.resumeRepository.findOne(savedResume.id, {
      relations: ['careers', 'hobbies', 'abilities', 'certifications'],
    });
  }

  public async getDefaultResume(): Promise<Resume> {
    const selectedResume = await this.resumeRepository.findOne({
      where: { selected: true },
      relations: ['careers', 'hobbies', 'abilities', 'certifications'],
    });

    return selectedResume;
  }

  public async getResumeCareers(resumeId: string): Promise<Career[]> {
    const careers = await this.careerRepository.find({
      where: {
        resumeId,
      },
      order: { weight: 'ASC' },
    });

    return careers;
  }

  public async getResumeHobbies(resumeId: string): Promise<Hobby[]> {
    const hobbies = await this.hobbyRepository.find({
      where: {
        resumeId,
      },
      order: { weight: 'ASC' },
    });

    return hobbies;
  }

  public async getResumeAbilities(resumeId: string): Promise<Ability[]> {
    const abilities = await this.abilityRepository.find({
      where: {
        resumeId,
      },
      order: { weight: 'ASC' },
    });

    return abilities;
  }

  public async resumeList(): Promise<Resume[]> {
    const resumeList = await this.resumeRepository.find({
      relations: ['careers', 'hobbies', 'abilities', 'certifications'],
    });

    return resumeList;
  }

  public async updateResume(resumeId: string, resumeInput: ResumeInput) {
    const {
      abilities,
      careers,
      hobbies,
      certifications,
      ...resume
    } = resumeInput;
    const resumeToUpdate = await this.resumeRepository.findOne(resumeId);

    resumeToUpdate.firstName = resume.firstName;
    resumeToUpdate.lastName = resume.lastName;
    resumeToUpdate.age = resume.age;
    resumeToUpdate.about = resume.about;
    resumeToUpdate.city = resume.city;
    resumeToUpdate.country = resume.country;
    resumeToUpdate.state = resume.state;
    resumeToUpdate.profileImage = resume.profileImage;
    resumeToUpdate.selected = resume.selected;

    if (resume.selected) {
      const previousResumeSelected = await this.resumeRepository.findOne({
        where: { selected: true },
      });

      if (previousResumeSelected && previousResumeSelected.id !== resumeId) {
        previousResumeSelected.selected = false;
        this.resumeRepository.save(previousResumeSelected);
      }
    }

    await this.resumeRepository.save(resumeToUpdate);

    // Update Careers
    careers.forEach(async (career: CareerInput) =>
      this.updateOrCreateCareer(career, resumeId),
    );

    // Update Hobbies
    hobbies.forEach(async (hobby: HobbyInput) =>
      this.updateOrCreateHobby(hobby, resumeId),
    );

    // Update Certifications
    certifications.forEach(async (certification: CertificationInput) =>
      this.updateOrCreateCertification(certification, resumeId),
    );

    abilities.forEach(async (ability: AbilityInput) =>
      this.updateOrCreateAbility(ability, resumeId),
    );
  }

  protected async updateOrCreateAbility(
    ability: AbilityInput,
    resumeId: string,
  ) {
    if (ability.hasOwnProperty('isNew') && ability.isNew === true) {
      const { id, ...cleanAbility } = ability;

      const newAbility = this.abilityRepository.create(cleanAbility);
      newAbility.resumeId = resumeId;

      await this.abilityRepository.save(newAbility);
    }

    if (ability.hasOwnProperty('isNew') && ability.isNew === false) {
      const abilityToUpdate = await this.abilityRepository.findOne({
        where: { id: ability.id },
      });

      abilityToUpdate.abilityName = ability.abilityName;
      abilityToUpdate.logo = ability.logo;
      abilityToUpdate.weight = ability.weight;
      abilityToUpdate.percent = ability.percent;
      abilityToUpdate.description = ability.description;

      await this.abilityRepository.save(abilityToUpdate);
    }
  }

  protected async updateOrCreateHobby(hobby: HobbyInput, resumeId: string) {
    if (hobby.hasOwnProperty('isNew') && hobby.isNew === true) {
      const { id, ...cleanHobby } = hobby;

      const newHobby = this.hobbyRepository.create(cleanHobby);
      newHobby.resumeId = resumeId;

      await this.hobbyRepository.save(newHobby);
    }

    if (hobby.hasOwnProperty('isNew') && hobby.isNew === false) {
      const hobbyToUpdate = await this.hobbyRepository.findOne({
        where: { id: hobby.id },
      });

      hobbyToUpdate.name = hobby.name;
      hobbyToUpdate.description = hobby.description;
      hobbyToUpdate.image = hobby.image;
      hobbyToUpdate.imagehd = hobby.imagehd;
      hobbyToUpdate.weight = hobby.weight;

      await this.hobbyRepository.save(hobbyToUpdate);
    }
  }

  protected async updateOrCreateCertification(
    certification: CertificationInput,
    resumeId: string,
  ) {
    if (certification.hasOwnProperty('isNew') && certification.isNew === true) {
      const { id, ...cleanCareer } = certification;

      const newCertification = this.certificationRepository.create(cleanCareer);
      newCertification.resumeId = resumeId;

      await this.certificationRepository.save(newCertification);
    }

    if (
      certification.hasOwnProperty('isNew') &&
      certification.isNew === false
    ) {
      const certificationToUpdate = await this.certificationRepository.findOne({
        where: { id: certification.id },
      });

      certificationToUpdate.certificationUrl = certification.certificationUrl;
      certificationToUpdate.certificationDescription =
        certification.certificationDescription;
      certificationToUpdate.certificationCode = certification.certificationCode;
      certificationToUpdate.certificationImageUrl =
        certification.certificationImageUrl;
      certificationToUpdate.status = certification.status;
      certificationToUpdate.weight = certification.weight;

      await this.certificationRepository.save(certificationToUpdate);
    }
  }

  protected async updateOrCreateCareer(career: CareerInput, resumeId: string) {
    if (career.hasOwnProperty('isNew') && career.isNew === true) {
      const { id, ...cleanCareer } = career;

      const newCareer = this.careerRepository.create(cleanCareer);
      newCareer.resumeId = resumeId;

      await this.careerRepository.save(newCareer);
    }

    if (career.hasOwnProperty('isNew') && career.isNew === false) {
      const careerToUpdate = await this.careerRepository.findOne({
        where: { id: career.id },
      });

      careerToUpdate.jobTitle = career.jobTitle;
      careerToUpdate.description = career.description;
      careerToUpdate.companyName = career.companyName;
      careerToUpdate.startDate = career.startDate;
      careerToUpdate.endDate = career.endDate;
      careerToUpdate.city = career.city;
      careerToUpdate.state = career.state;
      careerToUpdate.country = career.country;
      careerToUpdate.weight = career.weight;

      await this.careerRepository.save(careerToUpdate);
    }
  }
}
