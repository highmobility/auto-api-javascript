import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Double } from '../base/Double';
import { Enum } from '../base/Enum';

const EcoDrivingThresholdTypeDescriptor = {
  values: {
    one: 1,
    zero: 0,
  },
  size: 1,
};

@Descriptor(EcoDrivingThresholdTypeDescriptor)
export class EcoDrivingThresholdType extends Enum<
  keyof typeof EcoDrivingThresholdTypeDescriptor.values
> {}

@Size(8)
export class EcoDrivingThresholdValue extends Double {}

const EcoDrivingThresholdDescriptor = {
  items: {
    type: EcoDrivingThresholdType,
    value: EcoDrivingThresholdValue,
  },
  order: ['type', 'value'],
  size: 9,
};

@Descriptor(EcoDrivingThresholdDescriptor)
export class EcoDrivingThreshold extends CustomType<typeof EcoDrivingThresholdDescriptor.items> {}
