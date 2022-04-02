import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';
import { String } from '../base/String';

const AddressComponentTypeDescriptor = {
  values: {
    city: 0,
    country: 1,
    country_short: 2,
    district: 3,
    other: 7,
    postal_code: 4,
    state_province: 6,
    street: 5,
  },
  size: 1,
};

@Descriptor(AddressComponentTypeDescriptor)
export class AddressComponentType extends Enum<
  keyof typeof AddressComponentTypeDescriptor.values
> {}

export class AddressComponentValue extends String {}

const AddressComponentDescriptor = {
  items: {
    type: AddressComponentType,
    value: AddressComponentValue,
  },
  order: ['type', 'value'],
};

@Descriptor(AddressComponentDescriptor)
export class AddressComponent extends CustomType<typeof AddressComponentDescriptor.items> {}
