import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Resume } from './resume.entity';
import { CertificationStatusEnum } from '../../core/enum/certification-status.enum';

@Entity()
@ObjectType()
export class Certification {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Resume, (resume) => resume.certifications, { onDelete: 'CASCADE' })
  resume: Resume;

  @Field(() => String)
  @Column({ nullable: false })
  certificationUrl: string;

  @Field(() => String)
  @Column({ nullable: false })
  certificationImageUrl: string;

  @Field(() => String)
  @Column({ nullable: false })
  certificationDescription: string;

  @Field(() => String)
  @Column({ nullable: false })
  certificationCode: string;

  @Field(() => String)
  @Column({
    type: 'enum',
    enum: CertificationStatusEnum,
    default: CertificationStatusEnum.IN_PROGRESS,
    nullable: true,
  })
  status: CertificationStatusEnum;

  @Field(() => Int)
  @Column({ nullable: false })
  resumeId: string;

  @Field(() => Int)
  @Column({ nullable: false })
  weight: number;
}
