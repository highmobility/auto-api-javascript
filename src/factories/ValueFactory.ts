import {
  BytesValue,
  CustomValue,
  DoubleValue,
  EnumValue,
  FloatValue,
  IntegerValue,
  StringValue,
  TimestampValue,
  UintValue,
  UnitValue,
} from '../values';

import { Configuration } from '../configuration';

import { TypeDefinition, TypeDefinitionType } from '../types';

type NumericValueConstructor =
  | typeof DoubleValue
  | typeof FloatValue
  | typeof IntegerValue
  | typeof UintValue;

type ValueConstructor =
  | typeof BytesValue
  | typeof CustomValue
  | typeof EnumValue
  | typeof StringValue
  | typeof TimestampValue
  | typeof UnitValue
  | NumericValueConstructor;

const ValueConstructors: Partial<Record<TypeDefinitionType | string, ValueConstructor>> = {
  [TypeDefinitionType.Bytes]: BytesValue,
  [TypeDefinitionType.Custom]: CustomValue,
  [TypeDefinitionType.Double]: DoubleValue,
  [TypeDefinitionType.Enum]: EnumValue,
  [TypeDefinitionType.Float]: FloatValue,
  [TypeDefinitionType.Integer]: IntegerValue,
  [TypeDefinitionType.String]: StringValue,
  [TypeDefinitionType.Timestamp]: TimestampValue,
  [TypeDefinitionType.Uint]: UintValue,
};

export class ValueFactory {
  public static createFromDefinition(definition: TypeDefinition) {
    const { customType, event, size, type, unitType } = definition;

    const ValueConstructor =
      customType || event ? CustomValue : unitType ? UnitValue : ValueConstructors[type];

    switch (ValueConstructor) {
      case CustomValue:
        return new ValueConstructor(Configuration.getTypeDefinitionFromRef(definition));
      case EnumValue:
        return new ValueConstructor(definition);
      case DoubleValue:
      case FloatValue:
      case IntegerValue:
      case UintValue:
        return new (ValueConstructor as NumericValueConstructor)(size);
      case BytesValue:
      case StringValue:
      case TimestampValue:
        return new ValueConstructor();
      case UnitValue:
        return new ValueConstructor(Configuration.getMeasurementTypeDefinition(unitType as string));
      default:
        throw new Error(`Unknown value type: ${type}`);
    }
  }
}
