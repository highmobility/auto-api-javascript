import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { String } from '../base/String';

export class ChargingLocationFormattedAddress extends String {}

export class ChargingLocationMunicipality extends String {}

export class ChargingLocationStreetAddress extends String {}

const ChargingLocationDescriptor = {
  items: {
    formatted_address: ChargingLocationFormattedAddress,
    municipality: ChargingLocationMunicipality,
    street_address: ChargingLocationStreetAddress,
  },
  order: ['municipality', 'formatted_address', 'street_address'],
};

@Descriptor(ChargingLocationDescriptor)
export class ChargingLocation extends CustomType<typeof ChargingLocationDescriptor.items> {}
