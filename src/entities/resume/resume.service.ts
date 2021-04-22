import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ability } from './ability.entity';
import { Career } from './career.entity';
import { Hobby } from './hobby.entity';
import { AbilityInput } from './input/ability.input';
import { CareerInput } from './input/career.input';
import { HobbyInput } from './input/hobby.input';
import { ResumeInput } from './input/resume.input';
import { Resume } from './resume.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
    @InjectRepository(Ability)
    private abilityRepository: Repository<Ability>,
    @InjectRepository(Career)
    private careerRepository: Repository<Career>,
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>,
  ) {}

  public async newResume(resumeInput: ResumeInput): Promise<Resume> {
    const { careers, hobbies, abilities, ...resume } = resumeInput;
    const resumeEntity = this.resumeRepository.create(resume);
    const savedResume = await this.resumeRepository.save(resumeEntity);

    const abilityEntity = this.abilityRepository.create(
      abilities.map((ability: AbilityInput) => {
        return { ...ability, resumeId: savedResume.id };
      }),
    );

    await this.abilityRepository.save(abilityEntity);

    const careerEntity = this.careerRepository.create(
      careers.map((career: CareerInput) => {
        return { ...career, resumeId: savedResume.id };
      }),
    );

    await this.careerRepository.save(careerEntity);

    const hobbyEntity = this.hobbyRepository.create(
      hobbies.map((hobby: HobbyInput) => {
        return { ...hobby, resumeId: savedResume.id };
      }),
    );

    await this.hobbyRepository.save(hobbyEntity);

    return this.resumeRepository.findOne(savedResume.id, {
      relations: ['careers', 'hobbies', 'abilities'],
    });
  }

  public async resumeList(): Promise<Resume[]> {
    return this.resumeRepository.find({
      relations: ['careers', 'hobbies', 'abilities'],
    });
  }
}
