/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Symbols
 */
const descriptor = Symbol();

/**
 * Util types
 */
export type ConstructorType<T extends any> = new (...args: any[]) => T;

/**
 * Decorators
 */
export type ClassDescriptor = {
  [key: string]: any;
};

export function setClassDescriptor<
  T extends ClassDescriptor = ClassDescriptor,
  C extends ConstructorType<any> = ConstructorType<any>
>(target: C, value: T) {
  target.prototype[descriptor] = {
    ...(target.prototype[descriptor] || {}),
    ...value,
  };
}

function Descriptor<T extends ClassDescriptor>(value: T) {
  return (target: ConstructorType<any>) => setClassDescriptor(target, value);
}

function Size(size: number) {
  return Descriptor({ size });
}

/**
 * Value class
 * -----------------------------------------------------------------------
 */
interface ValueDescriptor {
  size?: number;
}

export class Value<V = any, S = V> {
  [descriptor]: ValueDescriptor;

  public constructor(protected value?: V) {}

  public getValue() {
    return this.value;
  }

  public setValue(value?: S) {
    this.value = (value as unknown) as V;
    return this;
  }
}

/**
 * Value types
 */
export type ValueConstructor<T extends Value = Value> = ConstructorType<T>;

export type ValueSetterArguments<V> = V extends Value<any, infer S> ? S : never;

/**
 * Strings:
 */
export class String extends Value<string> {}

/**
 * Numbers:
 */

export class Float extends Value<number> {}
export class Double extends Float {}

export class Integer extends Value<number> {}
export class UInteger extends Integer {}

/**
 * Bytes:
 */

export class Bytes extends Value<number[]> {}

/**
 * Timestamp:
 */

export class Timestamp extends Value<Date> {}

/**
 * Enums:
 */

// TODO Map string enum values to integers
export class Enum<T> extends Value<T> {}

// Example

// Auto gen
enum ActiveState {
  Inactive = 'inactive',
  Active = 'active',
}

// Auto gen
@Size(1)
export class ActiveStateValue extends Enum<ActiveState> {
  // verb: activate
  public activate() {
    this.setValue(ActiveState.Active);
    return this;
  }

  // verb: deactivate
  public deactivate() {
    this.setValue(ActiveState.Inactive);
    return this;
  }
}

/**
 * Custom types
 */

type CustomValueItems = Record<string, ValueConstructor>;

type CustomValueItemsSetter<T extends CustomValueItems> = {
  [key in keyof T]: ValueSetterArguments<InstanceType<T[key]>>;
};

export function valueSetterToValueMap<I extends CustomValueItems>(
  items: I,
  value?: CustomValueItemsSetter<I>,
): I | undefined {
  if (value) {
    return Object.entries(value).reduce(
      (values, [k, v]) => ({
        ...values,
        [k as keyof I]: v instanceof Value ? v : new items[k](v),
      }),
      {} as I,
    );
  }

  return value;
}

interface CustomValueDescriptor<V extends CustomValueItems> extends ValueDescriptor {
  items: V;
  order: (keyof V)[];
}

export class CustomValue<
  V extends CustomValueItems,
  S extends CustomValueItemsSetter<V> = CustomValueItemsSetter<V>
> extends Value<V, S> {
  [descriptor]: CustomValueDescriptor<V>;

  public constructor(value?: S) {
    super();
    this.setValue(value);
  }

  public setValue(value?: S) {
    this.value = valueSetterToValueMap(this[descriptor].items, value);
    return this;
  }
}

function Items<T extends CustomValueDescriptor<any>>(value: T) {
  return Descriptor<T>(value);
}

// Example A
class FailureDescriptionValue extends String {}

export enum FailureReason {
  RateLimit = 'rate_limit',
  Unauthorised = 'unauthorized',
}
@Size(1)
class FailureReasonValue extends Enum<FailureReason> {}

// TODO On gen, rename to items
const failure_items = {
  reason: FailureReasonValue,
  description: FailureDescriptionValue,
};

@Items({
  items: failure_items,
  order: ['reason', 'description'],
})
export class Failure extends CustomValue<typeof failure_items> {}

// Use
const failure = new Failure({
  reason: FailureReason.Unauthorised,
  description: 'description A',
});

failure.setValue({
  reason: FailureReason.RateLimit,
  description: 'description B',
});

// Example B (Ref in Windscreen)
@Size(1)
class ZoneHorizontalValue extends UInteger {}
@Size(1)
class ZoneVerticalValue extends UInteger {}

// TODO On gen, rename to items
const zone_items = {
  horizontal: ZoneHorizontalValue,
  vertical: ZoneVerticalValue,
};

@Items({
  items: zone_items,
  order: ['horizontal', 'vertical'],
})
@Size(2)
export class Zone extends CustomValue<typeof zone_items> {}

/**
 * Components
 * -----------------------------------------------------------------------
 */
export class PropertyComponent {}

/**
 * Properties
 * -----------------------------------------------------------------------
 */

export type PropertyDataComponentSetter<T> = T extends Property<any, infer S> ? S : never;

interface PropertyDescriptor<V extends ValueConstructor> {
  id: number;
  multiple?: boolean;
  name: string;
  value: V;
}

export class Property<
  V extends ValueConstructor = ValueConstructor,
  S extends ValueSetterArguments<InstanceType<V>> = ValueSetterArguments<InstanceType<V>>
> {
  [descriptor]: PropertyDescriptor<V>;

  // TODO Property components
  public data: InstanceType<V> | undefined;

  public constructor(value?: S) {
    this.setValue(value);
  }

  public setValue(v?: S) {
    this.data = (this.data || new this[descriptor].value()).setValue(v) as InstanceType<V>;
    return this;
  }
}

/**
 * Capabilities
 * -----------------------------------------------------------------------
 */

interface CapabilityDescriptor<P extends Properties> {
  identifier: [number, number];
  name: string;
  properties: P;
  state?: number[];
}

type Properties<T extends string = string> = Record<T, ConstructorType<Property>>;

type PropertiesMap<P extends Properties, K extends keyof P = keyof P> = {
  [name in K]?: InstanceType<P[name]> | InstanceType<P[name]>[];
};

// TOD Rename to properties
const capability_properties = Symbol();

export abstract class Capability<P extends Properties, K extends string> {
  [descriptor]: CapabilityDescriptor<P>;
  [capability_properties]: PropertiesMap<P> = {};

  public get properties() {
    return this[capability_properties];
  }

  public addProperty<T extends K>(
    name: T,
    value?: PropertyDataComponentSetter<InstanceType<P[T]>>,
  ): InstanceType<P[T]> {
    const PropertyConstructor = this[descriptor].properties[name];
    const property = new PropertyConstructor(value) as InstanceType<P[T]>;

    this.properties[name] = PropertyConstructor.prototype[descriptor].multiple
      ? [...((this.properties[name] as InstanceType<P[T]>[]) || []), property]
      : property;

    return property;
  }

  public getProperty<T extends K>(name: T) {
    return this.properties[name];
  }
}

/**
 * Command
 * -----------------------------------------------------------------------
 */
export class Command {}

/**
 * Test
 * -----------------------------------------------------------------------
 */

// Auto gen
enum WindscreenProperties {
  WipersStatus = 'wipers_status',
  WipersIntensity = 'wipers_intensity',
  WindscreenDamageDetectionTime = 'windscreen_damage_detection_time',
  WindscreenZoneMatrix = 'windscreen_zone_matrix',
}

export enum WiperStatus {
  Inactive = 'inactive',
  Active = 'active',
  Automatic = 'automatic',
}

@Size(1)
class WiperStatusValue extends Enum<WiperStatus> {
  // verb: activate
  public activate() {
    this.setValue(WiperStatus.Active);
    return this;
  }

  // verb: deactivate
  public deactivate() {
    this.setValue(WiperStatus.Inactive);
    return this;
  }
}

@Descriptor({
  id: 1,
  name: WindscreenProperties.WipersStatus,
  value: WiperStatusValue,
})
class WiperStatusProperty extends Property<typeof WiperStatusValue> {}

export enum WipersIntensity {
  Inactive = 'inactive',
  Active = 'active',
  Automatic = 'automatic',
}

@Size(1)
class WipersIntensityValue extends Enum<WipersIntensity> {}

@Descriptor({
  id: 2,
  name: WindscreenProperties.WipersIntensity,
  value: WipersIntensityValue,
})
class WiperIntensityProperty extends Property<typeof WipersIntensityValue> {}

@Descriptor({
  id: 8,
  name: WindscreenProperties.WindscreenDamageDetectionTime,
  value: Timestamp,
})
class WindscreenDamageDetectionTimeProperty extends Property<typeof Timestamp> {}

@Descriptor({
  id: 4,
  name: WindscreenProperties.WindscreenZoneMatrix,
  value: Zone, // Custom type
})
class WindscreenZoneMatrixProperty extends Property<typeof Zone> {}

const properties = {
  [WindscreenProperties.WipersStatus]: WiperStatusProperty,
  [WindscreenProperties.WipersIntensity]: WiperIntensityProperty,
  [WindscreenProperties.WindscreenDamageDetectionTime]: WindscreenDamageDetectionTimeProperty,
  [WindscreenProperties.WindscreenZoneMatrix]: WindscreenZoneMatrixProperty,
};

@Descriptor({
  identifier: [0, 66],
  name: 'windscreen',
  properties: properties,
  state: [1, 2, 4, 8],
})
export class Windscreen extends Capability<typeof properties, `${WindscreenProperties}`> {
  static Properties = WindscreenProperties;
}

// Use
const windscreen = new Windscreen();
// const a = windscreen.addProperty('wipers_intensity', WipersIntensity.Active);
// const b = windscreen.addProperty(Windscreen.Properties.WindscreenDamageDetectionTime, new Date());
const c = windscreen.addProperty(Windscreen.Properties.WindscreenZoneMatrix).setValue({
  horizontal: 2,
  vertical: 5,
});
// const propA = windscreen.properties['windscreen_damage_detection_time']!;
const propB = windscreen.getProperty(Windscreen.Properties.WindscreenZoneMatrix)!;
console.log(c, propB);
