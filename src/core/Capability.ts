import { Capability as ICapability, Property as IProperty } from '../types';
import { ComponentName } from '../components/classes';

import {
  bytesToChunks,
  bytesToInt,
  getArray,
  hexToUint8Array,
  isEmptyObject,
  isObject,
} from '../utils';

import { FormatError, InvalidCommandError } from './Error';
import { NamedEntity } from './NamedEntity';
import { Property } from './Property';
import { Serializable } from './Serializable';

interface CapabilityEncodeDecodeOptions {
  bytesAsPropertyIds?: boolean;
}

export abstract class Capability<P extends string = string>
  extends Serializable
  implements NamedEntity
{
  public properties = {} as Record<P, Property | Property[]>;

  public constructor(
    public readonly definition: Readonly<ICapability>,
    public readonly universalProperties: Readonly<Array<Readonly<IProperty>>>,
  ) {
    super();
  }

  public get id() {
    const {
      identifier: { msb, lsb },
    } = this.definition;
    return bytesToInt([msb, lsb]);
  }

  public get name() {
    return this.definition.name;
  }

  public decode(bytes: number[] = [], options?: CapabilityEncodeDecodeOptions) {
    try {
      if (options && options.bytesAsPropertyIds) {
        bytes.forEach((id) => this.createProperty(id));
      } else {
        for (const [id, chunk] of bytesToChunks(bytes)) {
          this.createProperty(id).decode(chunk);
        }
      }
    } catch (e) {
      throw new InvalidCommandError(e);
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

  public createProperty(id: P | number, dataComponentValue?: unknown) {
    const property = this.createPropertyInstance(id);

    if (dataComponentValue !== undefined) {
      property.createComponent('data', dataComponentValue);
    }
    return this.setProperty(property);
  }

  public createPropertyFromJSON(
    id: P | number,
    components: Partial<Record<ComponentName, unknown>>,
  ) {
    return this.setProperty(this.createPropertyInstance(id).fromJSON(components));
  }

  public createPropertiesFromExamples(name: P) {
    const definition = this.getPropertyDefinition('name', name);

    return definition.examples.reduce<Property[]>((properties, { data_component }) => {
      const property = new Property(definition);

      property.createComponent('data').decode(Array.from(hexToUint8Array(data_component)));
      this.setProperty(property);

      return [...properties, property];
    }, []);
  }

  public fromJSON(payload: unknown) {
    try {
      if (!isObject(payload)) {
        throw new Error('Capability must be an object.');
      }

      for (const [name, components] of Object.entries(payload)) {
        const componentsArray = getArray(components).filter((value) => value !== null);

        if (componentsArray.length) {
          for (const components of componentsArray) {
            if (!isObject(components)) {
              throw new Error('Property components must be an object.');
            }

            this.createPropertyFromJSON(name as P, components);
          }
        } else {
          this.createProperty(name as P);
        }
      }
    } catch (e) {
      throw new FormatError(e);
    }

    return this;
  }

  public getProperty(name: P): Property | undefined {
    const [property] = getArray(this.properties[name]);
    return property;
  }

  public getProperties(name: P) {
    return getArray(this.properties[name] || []);
  }

  public getPropertiesArray() {
    return Object.values<Property | Property[]>(this.properties).reduce<Property[]>(
      (allProperties, properties) => [...allProperties, ...getArray(properties)],
      [],
    );
  }

  public getStatePropertyNames() {
    return this.definition.state.map((id) => this.getPropertyDefinition('id', id).name);
  }

  public hasProperty(name: P) {
    return !!this.properties[name];
  }

  public hasProperties() {
    return !isEmptyObject(this.properties);
  }

  public toJSON() {
    return this.valueOf();
  }

  public valueOf() {
    return Object.entries<Property | Property[]>(this.properties).reduce(
      (value, [propertyName, properties]) => ({
        ...value,
        [propertyName]: Array.isArray(properties)
          ? properties.map((property) => property.valueOf())
          : properties.valueOf(),
      }),
      {},
    );
  }

  protected createPropertyInstance(id: P | number): Property {
    return new Property(
      typeof id === 'string'
        ? this.getPropertyDefinition('name', id)
        : this.getPropertyDefinition('id', id),
    );
  }

  protected getPropertyDefinition<T extends keyof IProperty>(field: T, value: IProperty[T]) {
    const definition = [...this.definition.properties, ...this.universalProperties].find(
      (property) => property[field] === value,
    );

    if (!definition) {
      throw new Error(
        `Capability ${this.name} does not have property identified by ${field}: ${value}.`,
      );
    }

    return definition;
  }

  protected setProperty(property: Property) {
    const name = property.name as P;

    const currentValue = this.properties[name];
    if (property.multiple && currentValue) {
      (this.properties[name] = getArray(currentValue)).push(property);
    } else {
      this.properties[name] = property;
    }

    return property;
  }
}
