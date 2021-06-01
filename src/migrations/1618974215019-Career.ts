import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class Career1618974215019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'career',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isUnique: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'companyName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'startDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'endDate',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'jobTitle',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
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
            name: 'weight',
            type: 'int',
            isNullable: false,
            default: 0,
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'career',
      new TableColumn({
        name: 'resumeId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'career',
      new TableForeignKey({
        columnNames: ['resumeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'resume',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('career');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('resumeId') !== -1,
    );

    await queryRunner.dropForeignKey('career', foreignKey);
    await queryRunner.dropColumn('career', 'resumeId');
    await queryRunner.dropTable('career');
  }
}
