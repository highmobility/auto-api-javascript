import { Descriptor } from '../../../decorators';
import { Illuminance } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'inside_light',
  value: Illuminance,
})
export class InsideLight extends Property<typeof Illuminance> {}
