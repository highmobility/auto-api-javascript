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

    if (!definition) {
      throw new Error(`Capability '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getConfiguration() {
    return configuration;
  }

  public static getCustomTypeDefinition(name: string): Readonly<TypeDefinition> {
    const definition = configuration.types[name];

    if (!definition) {
      throw new Error(`Custom type '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getEventDefinition(name: string): Readonly<TypeDefinition> {
    const definition = configuration.events[name];

    if (!definition) {
      throw new Error(`Event '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getPropertyComponentDefinition(name: string): Readonly<PropertyComponent> {
    const definition = configuration.property_components[name];

    if (!definition) {
      throw new Error(`Property component '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getMeasurementTypeDefinition(name: string): Readonly<MeasurementType> {
    const definition = configuration.measurement_types[name];

    if (!definition) {
      throw new Error(`Measurement type '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getTypeDefinitionFromRef(definition: TypeDefinition) {
    const { customType, event } = definition;
    return customType
      ? Configuration.getCustomTypeDefinition(customType)
      : event
        ? Configuration.getEventDefinition(event)
        : definition;
  }

  public static getUniversalProperties(): Readonly<Properties> {
    return configuration.universal_properties;
  }
}
