import { Descriptor } from '../../../decorators';
import { Illuminance } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'outside_light',
  value: Illuminance,
})
export class OutsideLight extends Property<typeof Illuminance> {}
