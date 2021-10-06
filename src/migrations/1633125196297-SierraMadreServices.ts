import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class SierraMadreServices1633125196297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'sierraMadreMainPageService',
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
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mobileImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'xlImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'xl2ImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'xl3ImageUrl',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'sierraMadreMainPageService',
      new TableColumn({
        name: 'mainPageId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'sierraMadreMainPageService',
      new TableForeignKey({
        columnNames: ['mainPageId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sierraMadreMainPage',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sierraMadreMainPageService', true, true, true);
  }
}
