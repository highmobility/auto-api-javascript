import { Descriptor } from '../../../decorators';
import { Light } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  multiple: true,
  name: 'interior_lights',
  value: Light,
})
export class InteriorLights extends Property<typeof Light> {}
