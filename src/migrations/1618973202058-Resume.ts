import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Resume1618973202058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'resume',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            generationStrategy: 'uuid',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'profileImage',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'about',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'selected',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('resume', true, true, true);
  }
}
