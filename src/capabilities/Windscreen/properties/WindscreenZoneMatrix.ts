import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Zone } from '../../../values/custom';

@Descriptor({
  id: 4,
  name: 'windscreen_zone_matrix',
  value: Zone,
})
export class WindscreenZoneMatrix extends Property<typeof Zone> {}
