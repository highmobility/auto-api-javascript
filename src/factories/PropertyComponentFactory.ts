import { ClassMap, ComponentMap, ComponentName } from '../components/classes';

import { Property } from '../core/Property';

export class PropertyComponentFactory {
  public static create<T extends ComponentName>(identifier: T | number, property: Property) {
    return typeof identifier === 'number'
      ? PropertyComponentFactory.createFromId(identifier, property)
      : PropertyComponentFactory.createFromName(identifier, property);
  }

  public static createFromId(id: number, property: Property) {
    const name = ComponentMap[id] as ComponentName | undefined;

    if (name === undefined) {
      throw new Error(`Unknown property component id: ${id}.`);
    }

    return PropertyComponentFactory.createFromName(name, property);
  }

  public static createFromName<T extends ComponentName>(name: T, property: Property) {
    const PropertyComponentConstructor = ClassMap[name];

    if (PropertyComponentConstructor) {
      return new PropertyComponentConstructor(property) as InstanceType<typeof ClassMap[T]>;
    } else {
      throw new Error(`Unknown property component name: ${name}.`);
    }
  }
}
