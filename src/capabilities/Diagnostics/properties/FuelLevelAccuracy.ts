import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const FuelLevelAccuracyEnumDescriptor = {
  values: {
    calculated: 1,
    measured: 0,
  },
  size: 1,
};

@Descriptor(FuelLevelAccuracyEnumDescriptor)
export class FuelLevelAccuracyEnum extends Enum<
  keyof typeof FuelLevelAccuracyEnumDescriptor.values
> {}

@Descriptor({
  id: 46,
  name: 'fuel_level_accuracy',
  value: FuelLevelAccuracyEnum,
})
export class FuelLevelAccuracy extends Property<typeof FuelLevelAccuracyEnum> {}
