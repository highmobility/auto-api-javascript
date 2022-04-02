import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const DurationDescriptor = {
  size: 10,
  units: {
    seconds: 0,
    minutes: 1,
    hours: 2,
    days: 3,
    weeks: 4,
    months: 5,
  },
};

@Descriptor(DurationDescriptor)
export class Duration extends UnitType<keyof typeof DurationDescriptor.units> {}
