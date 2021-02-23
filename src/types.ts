export interface Capability {
  identifier: {
    msb: number;
    lsb: number;
  };
  name: string;
  properties: Properties;
  setters?: PropertySetters;
  state: number[];
}

export interface Configuration {
  capabilities: Record<string, Capability>;
  measurement_types: Record<string, MeasurementType>;
  property_components: Record<string, PropertyComponent>;
  types: Record<string, TypeDefinition>;
  universal_properties: Properties;
  version: number;
}

export interface EnumValue {
  id: number;
  name: string;
  name_pretty?: string;
}

export type EnumValues = EnumValue[];

export interface MeasurementType {
  id: number;
  name: string;
  unit_types: UnitTypes;
}

export type MeasurementTypes = MeasurementType[];

export interface Property extends Omit<TypeDefinition, 'items'> {
  id: number;
  multiple?: boolean;
}

export type Properties = Property[];

export interface PropertyComponent extends TypeDefinition {
  id: number;
  name_pretty: string;
}

export type PropertyComponents = PropertyComponent[];

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
  customType?: string;
  enum_values?: EnumValues;
  items?: TypeDefinitions;
  name: string;
  name_cased: string;
  name_pretty?: string;
  size?: number;
  type: TypeDefinitionType | string;
  unitType?: string;
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
