import { Descriptor } from '../../../decorators';
import { Light } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 7,
  multiple: true,
  name: 'fog_lights',
  value: Light,
})
export class FogLights extends Property<typeof Light> {}
