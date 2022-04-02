import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { UInteger } from '../base/UInteger';

const DriverCardPresentCardPresentDescriptor = {
  values: {
    not_present: 0,
    present: 1,
  },
  size: 1,
};

@Descriptor(DriverCardPresentCardPresentDescriptor)
export class DriverCardPresentCardPresent extends Enum<
  keyof typeof DriverCardPresentCardPresentDescriptor.values
> {}

@Size(1)
export class DriverCardPresentDriverNumber extends UInteger {}

const DriverCardPresentDescriptor = {
  items: {
    card_present: DriverCardPresentCardPresent,
    driver_number: DriverCardPresentDriverNumber,
  },
  order: ['driver_number', 'card_present'],
  size: 2,
};

@Descriptor(DriverCardPresentDescriptor)
export class DriverCardPresent extends CustomType<typeof DriverCardPresentDescriptor.items> {}
