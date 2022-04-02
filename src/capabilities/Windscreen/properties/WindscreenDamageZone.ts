import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Zone } from '../../../values/custom';

@Descriptor({
  id: 5,
  name: 'windscreen_damage_zone',
  value: Zone,
})
export class WindscreenDamageZone extends Property<typeof Zone> {}
