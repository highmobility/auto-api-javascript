import { Registry } from './Registry';

export class Generator {
  public constructor(
    public rootDir: string,
    public autoAPIPath: string,
    public registry = Registry.getInstance(autoAPIPath),
  ) {
    this.registry.initModules();
  }

  emitEntities() {
    [
      this.registry.createCapabilities(),
      this.registry.createComponents(),
      this.registry.createUniversalProperties(),
      this.registry.modules.Values.CustomTypes,
      this.registry.modules.Values.UnitTypes,
    ].forEach((module) => module.emit(this.rootDir));
  }
}
