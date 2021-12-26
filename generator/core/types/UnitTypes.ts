import { Module } from '../Module';
import { Registry } from '../Registry';

import { UnitType, UnitTypeSpec } from './UnitType';

export class UnitTypes extends Module {
  protected spec!: Record<string, UnitTypeSpec>;

  public constructor() {
    super('/values/units', 'index', 'Unit');

    this.spec = this.importSpec();
  }

  public emit(rootDir: string): void {
    for (const [module] of Object.values(this.imports)) {
      module.emit(rootDir);
    }

    super.emit(rootDir, this.importsToExportNodes(true));
  }

  public export(identifier: string) {
    const typeIdentifier = this.stringToPascalCase(identifier);

    if (this.spec[typeIdentifier] && !this.imports[typeIdentifier]) {
      this.import(
        this.createModuleFromSpec(typeIdentifier, this.spec[typeIdentifier]),
        typeIdentifier,
      );
    }

    return this;
  }

  protected createModuleFromSpec(identifier: string, spec: UnitTypeSpec): Module {
    return new UnitType(identifier, spec);
  }

  protected importSpec(): Record<string, UnitTypeSpec> {
    return this.importUnits().reduce(
      (spec, unit) => ({
        ...spec,
        [this.stringToPascalCase(unit.name)]: {
          ...unit,
          type: 'unit',
        },
      }),
      {},
    );
  }

  protected importUnits(): UnitTypeSpec[] {
    return this.importYAML<{ measurement_types: UnitTypeSpec[] }>(
      Registry.getInstance().getAutoAPIPath('misc', 'unit_types.yml'),
    ).measurement_types;
  }
}
