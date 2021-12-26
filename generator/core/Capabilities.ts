import { join } from 'path';
import { readdirSync, statSync } from 'fs';

import { Capability, CapabilitySpec } from './Capability';
import { Module } from './Module';
import { Registry } from './Registry';

export class Capabilities extends Module {
  protected capabilities!: Capability[];

  public constructor() {
    super('/capabilities', 'index', 'Capability');

    this.capabilities = this.createCapabilities();
    this.nodes = this.importsToExportNodes();
  }

  public emit(rootDir: string): void {
    for (const capability of this.capabilities) {
      capability.emit(rootDir);
    }

    super.emit(rootDir, this.nodes);
  }

  protected createCapabilities() {
    return this.importSpec().reduce<Capability[]>((capabilities, spec) => {
      const name = this.stringToPascalCase(spec.name);
      const capability = new Capability(`${this.basePath}/${name}`, name, spec);

      this.import(capability, name);

      return capabilities.concat([capability]);
    }, []);
  }

  protected importSpec(): CapabilitySpec[] {
    const dir = Registry.getInstance().getAutoAPIPath('capabilities');
    return readdirSync(dir).reduce<CapabilitySpec[]>((specs, file) => {
      const path = join(dir, file);
      return statSync(path).isFile()
        ? specs.concat([this.importYAML<CapabilitySpec>(path)])
        : specs;
    }, []);
  }
}
