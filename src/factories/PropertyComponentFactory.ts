import { ClassMap, ComponentMap } from '../components/classes';
import { ComponentName } from '../components/types';

import { Property } from '../types';

export class PropertyComponentFactory {
  public static create<T extends ComponentName>(
    identifier: T | number,
    property: Property,
    initialValue?: unknown,
  ) {
    return typeof identifier === 'number'
      ? PropertyComponentFactory.createFromId(identifier, property, initialValue)
      : PropertyComponentFactory.createFromName(identifier, property, initialValue);
  }

  public static createFromId(id: number, property: Property, initialValue?: unknown) {
    const name = ComponentMap[id] as ComponentName | undefined;

    if (!name) {
      throw new Error(`Unknown property component id: ${id}.`);
    }

    return PropertyComponentFactory.createFromName(name, property, initialValue);
  }

  public static createFromName<T extends ComponentName>(
    name: T,
    property: Property,
    initialValue?: unknown,
  ) {
    const PropertyComponentConstructor = ClassMap[name];

    if (PropertyComponentConstructor) {
      const component = new PropertyComponentConstructor(property) as InstanceType<
        typeof ClassMap[T]
      >;

      if (initialValue !== undefined) {
        component.createValue(initialValue);
      }

      return component;
    } else {
      throw new Error(`Unknown property component name: ${name}.`);
    }
  }
}
