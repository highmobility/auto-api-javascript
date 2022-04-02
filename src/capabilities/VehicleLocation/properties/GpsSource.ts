import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const GpsSourceEnumDescriptor = {
  values: {
    dead_reckoning: 0,
    none: 2,
    real: 1,
  },
  size: 1,
};

@Descriptor(GpsSourceEnumDescriptor)
export class GpsSourceEnum extends Enum<keyof typeof GpsSourceEnumDescriptor.values> {}

@Descriptor({
  id: 8,
  name: 'gps_source',
  value: GpsSourceEnum,
})
export class GpsSource extends Property<typeof GpsSourceEnum> {}
