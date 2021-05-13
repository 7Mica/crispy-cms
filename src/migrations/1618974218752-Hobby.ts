import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class Hobby1618974218752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hobby',
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
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'hobby',
      new TableColumn({
        name: 'resumeId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'hobby',
      new TableForeignKey({
        columnNames: ['resumeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'resume',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('hobby');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('resumeId') !== -1,
    );

    await queryRunner.dropForeignKey('hobby', foreignKey);
    await queryRunner.dropColumn('hobby', 'resumeId');
    await queryRunner.dropTable('hobby');
  }
}
