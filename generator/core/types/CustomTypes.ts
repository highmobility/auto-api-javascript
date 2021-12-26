import { BaseTypeSpec, Registry } from '../Registry';
import { Module } from '../Module';

import { CustomType, CustomTypeSpec } from './CustomType';

export class CustomTypes extends Module {
  protected registry = Registry.getInstance();
  protected spec!: Record<string, CustomTypeSpec>;

  public constructor() {
    super('/values/custom', 'index', 'CustomType');

    this.spec = this.importSpec();
  }

  public emit(rootDir: string): void {
    for (const [module] of Object.values(this.imports)) {
      module.emit(rootDir);
    }

    super.emit(rootDir, this.importsToExportNodes(false));
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

  protected createModuleFromSpec(identifier: string, spec: CustomTypeSpec | BaseTypeSpec): Module {
    switch (spec.type) {
      case 'custom':
        return new CustomType(identifier, spec);
      default:
        return new (this.registry.getBaseTypeConstructor(spec))(
          this.basePath,
          this.stringToPascalCase(spec.name),
          spec as any,
        );
    }
  }

  protected importEvents(): CustomTypeSpec[] {
    return this.importYAML<{ events: CustomTypeSpec[] }>(
      this.registry.getAutoAPIPath('misc', 'events.yml'),
    ).events;
  }

  protected importTypes(): CustomTypeSpec[] {
    return this.importYAML<{ types: CustomTypeSpec[] }>(
      this.registry.getAutoAPIPath('misc', 'custom_types.yml'),
    ).types;
  }

  protected importSpec(): Record<string, CustomTypeSpec> {
    return [...this.importEvents(), ...this.importTypes()].reduce(
      (spec, type) => ({
        ...spec,
        [this.stringToPascalCase(type.name)]: type,
      }),
      {},
    );
  }
}
