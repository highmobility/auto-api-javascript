import { Module } from './Module';
import { Property, PropertySpec } from './Property';
import { Registry } from './Registry';

export class UniversalProperties extends Module {
  public properties!: Property[];

  protected registry = Registry.getInstance();

  public constructor() {
    super('/universal', 'index', 'Property');

    this.properties = this.createProperties(this.importSpec());
    this.nodes = this.importsToExportNodes();
  }

  public emit(rootDir: string): void {
    for (const property of this.properties) {
      property.emit(rootDir);
    }

    super.emit(rootDir, this.nodes);
  }

  protected createProperties(spec: PropertySpec[]) {
    return spec.map((spec) => {
      const name = this.stringToPascalCase(spec.name);
      const module = new Property(`${this.basePath}/properties`, name, spec);

      this.import(module, name);

      return module;
    });
  }

  protected importSpec(): PropertySpec[] {
    return this.importYAML<{ universal_properties: PropertySpec[] }>(
      this.registry.getAutoAPIPath('misc', 'universal_properties.yml'),
    ).universal_properties;
  }
}
