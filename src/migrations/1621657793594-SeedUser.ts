import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { hash } from 'bcrypt';

export class SeedUser1621657793594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('user').save({
      email: 'mich@gmail.com',
      password: await hash('12341234', 10),
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
