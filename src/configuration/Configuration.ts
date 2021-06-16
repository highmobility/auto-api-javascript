import {
  Capability,
  Configuration as ConfigurationType,
  MeasurementType,
  Properties,
  PropertyComponent,
  TypeDefinition,
} from '../types';

import configuration from './configuration.json';

export class Configuration {
  public static raw: Readonly<ConfigurationType> = configuration;

  public static getApiVersion() {
    return configuration.version;
  }

  public static getCapabilityDefinition(name: string): Readonly<Capability> {
    const definition = Configuration.raw.capabilities[name];

    if (!definition) {
      throw new Error(`Capability '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getConfiguration() {
    return Configuration.raw;
  }

  public static getCustomTypeDefinition(name: string): Readonly<TypeDefinition> {
    const definition = Configuration.raw.types[name];

    if (!definition) {
      throw new Error(`Custom type '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getEventDefinition(name: string): Readonly<TypeDefinition> {
    const definition = Configuration.raw.events[name];

    if (!definition) {
      throw new Error(`Event '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getPropertyComponentDefinition(name: string): Readonly<PropertyComponent> {
    const definition = Configuration.raw.property_components[name];

    if (!definition) {
      throw new Error(`Property component '${name}' doesn't exist.`);
    }

    return definition;
  }

  public static getMeasurementTypeDefinition(name: string): Readonly<MeasurementType> {
    const definition = Configuration.raw.measurement_types[name];

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
    return Configuration.raw.universal_properties;
  }
}
