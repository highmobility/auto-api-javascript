import { ChargingLocation } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  name: 'location',
  value: ChargingLocation,
})
export class Location extends Property<typeof ChargingLocation> {}
