import {
  Capability,
  MeasurementType,
  Properties,
  PropertyComponent,
  TypeDefinition,
} from '../types';

import { configuration } from '../configuration';

export class Configuration {
  public static getApiVersion() {
    return configuration.version;
  }

  public static getCapabilityDefinition(name: string): Readonly<Capability> {
    const definition = configuration.capabilities[name];

    if (definition === undefined) throw new Error(`Capability '${name}' doesn't exist.`);

    return definition;
  }

  public static getCustomTypeDefinition(name: string): Readonly<TypeDefinition> {
    const definition = configuration.types[name];

    if (definition === undefined) throw new Error(`Custom type '${name}' doesn't exist.`);

    return definition;
  }

  public static getPropertyComponentDefinition(name: string): Readonly<PropertyComponent> {
    const definition = configuration.property_components[name];

    if (definition === undefined) throw new Error(`Property component '${name}' doesn't exist.`);

    return definition;
  }

  public static getMeasurementTypeDefinition(name: string): Readonly<MeasurementType> {
    const definition = configuration.measurement_types[name];

    if (definition === undefined) throw new Error(`Measurement type '${name}' doesn't exist.`);

    return definition;
  }

  public static getUniversalProperties(): Readonly<Properties> {
    return configuration.universal_properties;
  }
}
