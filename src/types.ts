export interface Capability {
  api: CapabilityVersion;
  authorization: boolean;
  category: string;
  disabled_in?: string[];
  getters?: PropertyGetters;
  identifier: {
    msb: number;
    lsb: number;
  };
  name: string;
  name_cased: string;
  name_pretty: string;
  properties: Properties;
  setters?: PropertySetters;
  state: number[];
}

export interface CapabilityVersion {
  intro: number;
  update: number;
}

export interface Configuration {
  capabilities: Record<string, Capability>;
  events: Record<string, TypeDefinition>;
  measurement_types: Record<string, MeasurementType>;
  property_components: Record<string, PropertyComponent>;
  types: Record<string, TypeDefinition>;
  universal_properties: Properties;
  version: number;
}

export interface DeprecationInfo {
  new_name: string;
  reason: string;
}

export interface EnumValue {
  id: number;
  disabled_in_setter?: boolean;
  name: string;
  name_pretty?: string;
  verb?: string;
}

export type EnumValues = EnumValue[];

export interface MeasurementType {
  id: number;
  name: string;
  unit_types: UnitTypes;
}

export type MeasurementTypes = MeasurementType[];

export interface NumericRange {
  min: number;
  max: number;
}

export interface Property extends Omit<TypeDefinition, 'items'> {
  id: number;
  added?: number;
  deprecated?: DeprecationInfo;
  description?: string;
  examples: PropertyExamples;
  identity_key?: string;
  multiple?: boolean;
}

export type Properties = Property[];

export interface PropertyComponent extends TypeDefinition {
  id: number;
  name_pretty: string;
}

export type PropertyComponents = PropertyComponent[];

export type PropertyExample = {
  data_component: string;
  description: string;
} & (PropertyExampleValue | PropertyExampleValues);

export type PropertyExamples = PropertyExample[];

export interface PropertyExampleValue {
  value: PropertyExampleValueTypes;
}

export interface PropertyExampleValues {
  values: PropertyExampleValueTypes;
}

export type PropertyExampleValueType = number | number[] | string;

export type PropertyExampleValueTypes =
  | PropertyExampleValueType
  | {
      [key: string]:
        | PropertyExampleValueType
        | PropertyExampleValueTypes
        | PropertyExampleValueTypes[]
        | undefined;
    };

export interface PropertyGetters {
  name?: string;
  skip_properties_getter?: boolean;
}

export interface PropertySetter {
  constants?: PropertySetterConstants;
  description: string;
  name: string;
  mandatory?: number[];
  optional?: number[];
}

export type PropertySetters = PropertySetter[];

export interface PropertySetterConstant {
  property_id: number;
  value: number[];
}

export type PropertySetterConstants = PropertySetterConstant[];

export interface TypeDefinition {
  controls?: 'switch' | string;
  customType?: string;
  enum_values?: EnumValues;
  event?: string;
  items?: TypeDefinitions;
  name: string;
  name_cased: string;
  name_pretty?: string;
  name_singular?: string;
  size?: number;
  type: TypeDefinitionType | string;
  unitType?: string;
  validation?: `min:${number}|max:${number}` | string;
}

export type TypeDefinitions = TypeDefinition[];

export enum TypeDefinitionType {
  Bytes = 'bytes',
  Custom = 'custom',
  Double = 'double',
  Enum = 'enum',
  Float = 'float',
  Integer = 'integer',
  String = 'string',
  Timestamp = 'timestamp',
  Uint = 'uinteger',
}

export interface UnitType {
  id: number;
  name: string;
  conversion_linear?: number;
  conversion_inverse?: number;
}

export type UnitTypes = UnitType[];
