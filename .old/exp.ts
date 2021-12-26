/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Symbols
 */
const DescriptorSymbol = Symbol();
const PropertiesSymbol = Symbol();

/**
 * Util types
 */
export type ConstructorType<T extends any> = new (...args: any[]) => T;

/**
 * Decorators
 */

type DescriptorType<C> = C extends ConstructorType<infer I>
  ? I extends {
      [DescriptorSymbol]: infer D;
    }
    ? D
    : never
  : never;

export function getClassDescriptor<C extends ConstructorType<any>>(target: C) {
  return target.prototype[DescriptorSymbol] as DescriptorType<C>;
}

export type ClassDescriptor = {
  [key: string]: any;
};

export function setClassDescriptor<
  T extends ClassDescriptor = ClassDescriptor,
  C extends ConstructorType<any> = ConstructorType<any>,
>(target: C, value: T) {
  target.prototype[DescriptorSymbol] = {
    ...(target.prototype[DescriptorSymbol] || {}),
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
  [DescriptorSymbol]: ValueDescriptor;

  public value!: V;

  public constructor(value: S) {
    this.setValue(value);
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: S) {
    this.value = value as unknown as V;
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

export class Timestamp extends Value<Date, Date | string> {
  public constructor(value: Date | string = new Date()) {
    super(value);
  }

  public setValue(value: Date | string) {
    this.value = typeof value === 'string' ? new Date(value) : value;
    return this;
  }
}

/**
 * Enums:
 */

interface EnumDescriptor<I extends string = string> extends ValueDescriptor {
  values: Record<I, number>;
}

export class Enum<I extends string = string> extends Value<I> {
  [DescriptorSymbol]: EnumDescriptor<I>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }
}

// Example

// Auto gen
const ActiveStateDescriptor = {
  values: {
    inactive: 0,
    active: 1,
  },
  size: 1,
};

@Descriptor(ActiveStateDescriptor)
export class ActiveState extends Enum<keyof typeof ActiveStateDescriptor.values> {
  // verb: activate
  public activate() {
    this.setValue('active');
    return this;
  }

  // verb: deactivate
  public deactivate() {
    this.setValue('inactive');
    return this;
  }
}

/**
 * Custom types
 */

type CustomTypeItems = Record<string, ValueConstructor>;

type CustomTypeItemsSetter<T extends CustomTypeItems> = {
  [key in keyof T]: ValueSetterArguments<InstanceType<T[key]>>;
};

interface CustomTypeDescriptor<V extends CustomTypeItems> extends ValueDescriptor {
  items: V;
  order: V[keyof V];
}

function Items<T extends CustomTypeDescriptor<any>>(value: T) {
  return Descriptor<T>(value);
}

export class CustomType<
  V extends CustomTypeItems,
  S extends CustomTypeItemsSetter<V> = CustomTypeItemsSetter<V>,
> extends Value<V, S> {
  [DescriptorSymbol]: CustomTypeDescriptor<V>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: S) {
    this.value = this.valueSetterToValueMap(this[DescriptorSymbol].items, value);
    return this;
  }

  protected valueSetterToValueMap<I extends CustomTypeItems>(
    items: I,
    value: CustomTypeItemsSetter<I>,
  ): I {
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
}

// Example A
class FailureDescription extends String {}

const FailureReasonDescriptor = {
  values: {
    rate_limit: 0,
    unauthorized: 1,
  },
  size: 1,
};

@Descriptor(FailureReasonDescriptor)
class FailureReason extends Enum<keyof typeof FailureReasonDescriptor.values> {}

const FailureDescriptor = {
  items: {
    reason: FailureReason,
    description: FailureDescription,
  },
  order: ['reason', 'description'],
};

@Items(FailureDescriptor)
export class Failure extends CustomType<typeof FailureDescriptor.items> {}

// Use
const failure = new Failure({
  reason: 'unauthorized',
  description: 'description A',
});

failure.setValue({
  reason: 'rate_limit',
  description: 'description B',
});

// Example B (Ref in Windscreen)
@Size(1)
class ZoneHorizontal extends UInteger {}
@Size(1)
class ZoneVertical extends UInteger {}

const ZoneDescriptor = {
  items: {
    horizontal: ZoneHorizontal,
    vertical: ZoneVertical,
  },
  order: [ZoneHorizontal, ZoneVertical],
  size: 2,
};

@Items(ZoneDescriptor)
export class Zone extends CustomType<typeof ZoneDescriptor.items> {}

/**
 * Unit values
 */

interface UnitTypeDescriptor<U extends string = string> extends ValueDescriptor {
  units: Record<U, number>;
}

interface UnitTypeValue<U extends string = string> {
  unit: U;
  value: Double;
}

interface UnitTypeValueSetter<U extends string> {
  unit?: U;
  value: UnitTypeValue['value'] | ValueSetterArguments<UnitTypeValue['value']>;
}

export class UnitType<U extends string> extends Value<UnitTypeValue<U>, UnitTypeValueSetter<U>> {
  [DescriptorSymbol]: UnitTypeDescriptor<U>;

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: UnitTypeValueSetter<U>) {
    // TODO
    this.value = value as UnitTypeValue<U>;
    return this;
  }
}

// Example A
const AccelerationDescriptor = {
  units: {
    meters_per_second_squared: 0,
    gravity: 1,
  },
};

@Descriptor(AccelerationDescriptor)
export class Acceleration extends UnitType<keyof typeof AccelerationDescriptor.units> {}

/**
 * Property components
 * -----------------------------------------------------------------------
 */
const PropertyComponents = {
  availability: {
    id: 5,
    value: Value,
  },
  data: {
    id: 1,
    value: Value,
  },
  failure: {
    id: 3,
    value: Failure,
  },
  timestamp: {
    id: 2,
    value: Timestamp,
  },
};

/**
 * Properties
 * -----------------------------------------------------------------------
 */

type PropertyComponentContainer<
  V extends ValueConstructor,
  C extends typeof PropertyComponents = typeof PropertyComponents,
> = {
  [K in keyof C]?: K extends 'data'
    ? InstanceType<V>
    : C[K] extends { value: ValueConstructor }
    ? InstanceType<C[K]['value']>
    : any;
};

export type PropertyDataComponentSetter<T> = T extends Property<infer D>
  ? ValueSetterArguments<InstanceType<D>>
  : never;

interface PropertyDescriptor<V extends ValueConstructor> {
  id: number;
  multiple?: boolean;
  name: string;
  value: V;
}

export class Property<V extends ValueConstructor = ValueConstructor>
  implements PropertyComponentContainer<V>
{
  [DescriptorSymbol]: PropertyDescriptor<V>;

  public availability: Value | undefined;
  public data: InstanceType<V> | undefined;
  public failure: Failure | undefined;
  public timestamp: Timestamp | undefined;

  public constructor(value?: ValueSetterArguments<InstanceType<V>>) {
    if (value) {
      this.setValue(value);
    }
  }

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public setValue(value: ValueSetterArguments<InstanceType<V>>) {
    this.data = (this.data || new this.descriptor.value()).setValue(value) as InstanceType<V>;
    return this;
  }
}

/**
 * Capabilities
 * -----------------------------------------------------------------------
 */

interface CapabilityDescriptor<P extends Properties = Properties> {
  identifier: [number, number];
  name: string;
  properties: P;
  state?: ValueConstructor[];
}

type Properties<T extends string = string> = Record<T, ConstructorType<Property>>;

type PropertiesMap<P extends Properties, K extends keyof P = keyof P> = {
  [name in K]?: InstanceType<P[name]> | InstanceType<P[name]>[];
};

export abstract class Capability<P extends Properties> {
  [DescriptorSymbol]: CapabilityDescriptor<P>;
  [PropertiesSymbol]: PropertiesMap<P> = {};

  public get descriptor() {
    return this[DescriptorSymbol];
  }

  public get properties() {
    return this[PropertiesSymbol];
  }

  public addProperty<T extends keyof P>(
    name: T,
    value?: PropertyDataComponentSetter<InstanceType<P[T]>>,
  ): InstanceType<P[T]> {
    const Constructor = this.descriptor.properties[name];
    const property = new Constructor(value) as InstanceType<P[T]>;

    this.properties[name] = getClassDescriptor(Constructor).multiple
      ? [...((this.properties[name] as InstanceType<P[T]>[]) || []), property]
      : property;

    return property;
  }

  public getProperty<T extends keyof P>(name: T) {
    return this.properties[name];
  }

  public toJSON() {
    return this.properties;
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
  WiperStatus = 'wipers_status',
  WipersIntensity = 'wipers_intensity',
  WindscreenDamageDetectionTime = 'windscreen_damage_detection_time',
  WindscreenZoneMatrix = 'windscreen_zone_matrix',
}

const WiperStatusDescriptor = {
  values: {
    inactive: 0,
    active: 1,
    automatic: 2,
  },
  size: 1,
};

@Descriptor(WiperStatusDescriptor)
class WiperStatus extends Enum<keyof typeof WiperStatusDescriptor.values> {
  // verb: activate
  public activate() {
    this.setValue('active');
    return this;
  }

  // verb: deactivate
  public deactivate() {
    this.setValue('inactive');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'wipers_status',
  value: WiperStatus,
})
class WiperStatusProperty extends Property<typeof WiperStatus> {}

const WipersIntensityDescriptor = {
  values: {
    inactive: 0,
    active: 1,
    automatic: 2,
  },
  size: 1,
};

@Descriptor(WipersIntensityDescriptor)
class WipersIntensity extends Enum<keyof typeof WipersIntensityDescriptor.values> {}

@Descriptor({
  id: 2,
  name: 'wipers_intensity',
  value: WipersIntensity,
})
class WiperIntensityProperty extends Property<typeof WipersIntensity> {}

@Descriptor({
  id: 8,
  name: 'windscreen_damage_detection_time',
  value: Timestamp,
})
class WindscreenDamageDetectionTimeProperty extends Property<typeof Timestamp> {}

@Descriptor({
  id: 4,
  name: 'windscreen_zone_matrix',
  value: Zone, // Custom type
})
class WindscreenZoneMatrixProperty extends Property<typeof Zone> {}

const WindscreenDescriptor = {
  identifier: [0, 66],
  name: 'windscreen',
  properties: {
    wipers_status: WiperStatusProperty,
    wipers_intensity: WiperIntensityProperty,
    windscreen_damage_detection_time: WindscreenDamageDetectionTimeProperty,
    windscreen_zone_matrix: WindscreenZoneMatrixProperty,
  },
  state: [
    WiperStatusProperty,
    WiperIntensityProperty,
    WindscreenDamageDetectionTimeProperty,
    WindscreenZoneMatrixProperty,
  ],
};

@Descriptor(WindscreenDescriptor)
export class Windscreen extends Capability<typeof WindscreenDescriptor.properties> {
  public static Name = WindscreenDescriptor.name;
  public static Properties = WindscreenProperties;
}

// Use
const windscreen = new Windscreen();
windscreen.addProperty(Windscreen.Properties.WiperStatus, 'active');
windscreen.addProperty('windscreen_damage_detection_time', new Date());

const c = windscreen.addProperty('windscreen_zone_matrix', {
  horizontal: 2,
  vertical: 5,
});
c.timestamp = new Timestamp();

const d = windscreen.properties['windscreen_damage_detection_time']!;
const e = windscreen.getProperty('wipers_status')!;

console.log(
  JSON.stringify(c),
  JSON.stringify(d),
  JSON.stringify(e),
  getClassDescriptor(WindscreenDamageDetectionTimeProperty),
  getClassDescriptor(WindscreenZoneMatrixProperty),
);
