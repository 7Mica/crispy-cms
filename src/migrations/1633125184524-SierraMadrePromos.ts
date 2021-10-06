import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class SierraMadrePromos1633125184524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'sierraMadreMainPagePromo',
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
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'backgroundImage',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'sierraMadreMainPagePromo',
      new TableColumn({
        name: 'mainPageId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'sierraMadreMainPagePromo',
      new TableForeignKey({
        columnNames: ['mainPageId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sierraMadreMainPage',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sierraMadreMainPagePromo', true, true, true);
  }
}
