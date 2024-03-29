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
import { Configuration } from '../core/Configuration';

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
  public static createFromDefinition(definition: TypeDefinition): InstanceType<ValueConstructor> {
    const { customType, event, type, unitType } = definition;

    if (customType || event) {
      return ValueFactory.createFromDefinition(Configuration.getTypeDefinitionFromRef(definition));
    }

    if (unitType) {
      return new UnitValue(Configuration.getMeasurementTypeDefinition(unitType as string));
    }

    const ValueConstructor = ValueConstructors[type];

    switch (ValueConstructor) {
      case CustomValue:
      case EnumValue:
      case DoubleValue:
      case FloatValue:
      case IntegerValue:
      case UintValue:
      case BytesValue:
      case StringValue:
      case TimestampValue:
        return new ValueConstructor(definition);
      default:
        throw new Error(`Unknown value type: ${type}`);
    }
  }
}
