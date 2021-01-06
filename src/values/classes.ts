import { MeasurementType, TypeDefinition, TypeDefinitionType } from '../types';

import { BytesValue } from './BytesValue';
import { CustomValue } from './CustomValue';
import { DoubleValue } from './DoubleValue';
import { EnumValue } from './EnumValue';
import { FloatValue } from './FloatValue';
import { IntegerValue } from './IntegerValue';
import { StringValue } from './StringValue';
import { TimestampValue } from './TimestampValue';
import { UintValue } from './UintValue';
import { UnitValue } from './UnitValue';

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

export function createValueInstanceFromDefinition(
  definition: TypeDefinition,
  resolveCustomValueTypeDefinition: (type: string) => Readonly<TypeDefinition>,
  resolveUnitValueTypeDefinition: (type: string) => Readonly<MeasurementType>,
) {
  const valueConstructor = getValueConstructor(definition);

  switch (valueConstructor) {
    case CustomValue:
      return new valueConstructor(
        resolveCustomValueTypeDefinition(definition.customType as string),
      );
    case EnumValue:
      return new valueConstructor(definition);
    case DoubleValue:
    case FloatValue:
    case IntegerValue:
    case UintValue:
      return new (valueConstructor as NumericValueConstructor)(definition.size);
    case BytesValue:
    case StringValue:
    case TimestampValue:
      return new valueConstructor();
    case UnitValue:
      return new valueConstructor(resolveUnitValueTypeDefinition(definition.unitType as string));
    default:
      throw new Error(`Unknown value type: ${definition.type}`);
  }
}

export function getValueConstructor({ customType, type, unitType }: TypeDefinition) {
  if (customType) return CustomValue;
  if (unitType) return UnitValue;

  const ValueConstructor = ValueConstructors[type];
  if (ValueConstructor) return ValueConstructor;

  throw new Error(`Unknown value type: ${type}`);
}
