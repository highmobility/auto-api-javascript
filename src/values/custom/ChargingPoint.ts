import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { String } from '../base/String';

export class ChargingPointCity extends String {}

export class ChargingPointPostalCode extends String {}

export class ChargingPointProvider extends String {}

export class ChargingPointStreet extends String {}

const ChargingPointDescriptor = {
  items: {
    city: ChargingPointCity,
    postal_code: ChargingPointPostalCode,
    provider: ChargingPointProvider,
    street: ChargingPointStreet,
  },
  order: ['city', 'postal_code', 'street', 'provider'],
};

@Descriptor(ChargingPointDescriptor)
export class ChargingPoint extends CustomType<typeof ChargingPointDescriptor.items> {}
