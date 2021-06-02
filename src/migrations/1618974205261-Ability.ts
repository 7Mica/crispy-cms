import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class Ability1618974205261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ability',
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
            name: 'logo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'percent',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'abilityName',
            type: 'enum',
            enum: ['SKILL', 'LANGUAGE', 'OS', 'TOOL'],
            isNullable: false,
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
      'ability',
      new TableColumn({
        name: 'resumeId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'ability',
      new TableForeignKey({
        columnNames: ['resumeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'resume',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('ability');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('resumeId') !== -1,
    );

    await queryRunner.dropForeignKey('ability', foreignKey);
    await queryRunner.dropColumn('ability', 'resumeId');
    await queryRunner.dropTable('ability');
  }
}
