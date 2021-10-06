import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SierraMadreMainPage1633124823825 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'sierraMadreMainPage',
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
            name: 'selected',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'street',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'houseNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'zipCode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sierraMadreMainPage', true, true, true);
  }
}
