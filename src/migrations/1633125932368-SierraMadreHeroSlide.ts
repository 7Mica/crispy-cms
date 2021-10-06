import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class SierraMadreHeroSlide1633125932368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'sierraMadreMainPageHeroSlide',
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
            name: 'mobileImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'smImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mdImageUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lgImageUrl',
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
      'sierraMadreMainPageHeroSlide',
      new TableColumn({
        name: 'mainPageId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'sierraMadreMainPageHeroSlide',
      new TableForeignKey({
        columnNames: ['mainPageId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sierraMadreMainPage',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      'sierraMadreMainPageHeroSlide',
      true,
      true,
      true,
    );
  }
}
