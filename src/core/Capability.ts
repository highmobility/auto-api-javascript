import { Capability as ICapability, Property as IProperty } from '../types';

import { bytesToChunks, getKeyValuePairFromObject, isObject } from '../utils';

import { JSONError } from './Error';
import { NamedEntity } from './NamedEntity';
import { Property } from './Property';
import { Serializable } from './Serializable';

interface CapabilityEncodeDecodeOptions {
  bytesAsPropertyIds?: boolean;
}

export abstract class Capability extends Serializable implements NamedEntity {
  public properties: Record<string, Property | Property[]> = {};

  public constructor(
    public readonly definition: Readonly<ICapability>,
    public readonly universalProperties: Readonly<Array<Readonly<IProperty>>>,
  ) {
    super();
  }

  public get name() {
    return this.definition.name;
  }

  public decode(bytes: number[], options?: CapabilityEncodeDecodeOptions) {
    if (options && options.bytesAsPropertyIds) {
      (bytes.length ? bytes : this.definition.state).forEach((id) => {
        this.createProperty(id).decode();
      });
    } else {
      for (const [id, chunk] of bytesToChunks(bytes)) {
        this.createProperty(id).decode(chunk);
      }
    }

    return this;
  }

  public encode(options?: CapabilityEncodeDecodeOptions) {
    const properties = this.getPropertiesArray();
    if (options && options.bytesAsPropertyIds) {
      return properties.map((property) => property.id);
    } else {
      return properties.reduce<number[]>(
        (encodedProperties, property) => [...encodedProperties, ...property.encode()],
        [],
      );
    }
  }

  public createProperty(id: string | number) {
    const property = new Property(
      typeof id === 'string'
        ? this.getPropertyDefinition('name', id)
        : this.getPropertyDefinition('id', id),
    );
    this.setProperty(property);

    return property;
  }

  public fromJSON(payload: unknown) {
    try {
      const [, properties] = getKeyValuePairFromObject(payload);
      if (!isObject(properties)) {
        throw new Error('Properties must be an object.');
      }

      for (const [name, components] of Object.entries(properties)) {
        const componentsArray = (Array.isArray(components) ? components : [components]).filter(
          (value) => value !== null,
        );

        if (componentsArray.length) {
          for (const components of componentsArray) {
            if (!isObject(components)) {
              throw new Error('Property components must be an object.');
            }

            this.createProperty(name).fromJSON(components);
          }
        } else {
          this.createProperty(name);
        }
      }
    } catch (e) {
      throw new JSONError(e);
    }

    return this;
  }

  public getProperty(name: string): Property | undefined {
    const property = this.properties[name];
    return Array.isArray(property) ? property[0] : property;
  }

  public getProperties(name: string): Property[] | undefined {
    const property = this.properties[name];
    return Array.isArray(property) ? property : [property];
  }

  public getPropertiesArray() {
    return Object.values(this.properties).reduce<Property[]>(
      (allProperties, properties) => [
        ...allProperties,
        ...(Array.isArray(properties) ? properties : [properties]),
      ],
      [],
    );
  }

  public getPropertyDefinition<T extends keyof IProperty>(field: T, value: IProperty[T]) {
    const definition = [...this.definition.properties, ...this.universalProperties].find(
      (property) => property[field] === value,
    );

    if (definition === undefined) {
      throw new Error(
        `Capability ${this.name} does not have property identified by ${field}: ${value}.`,
      );
    }

    return definition;
  }

  public hasProperty(name: string) {
    return !!this.properties[name];
  }

  public setProperty(property: Property) {
    const { name } = property;

    const currentValue = this.properties[name];
    if (property.multiple && currentValue) {
      (this.properties[name] = Array.isArray(currentValue) ? currentValue : [currentValue]).push(
        property,
      );
    } else {
      this.properties[name] = property;
    }

    return this;
  }

  public toJSON() {
    const { name, properties } = this;

    return {
      [name]: properties,
    };
  }
}
