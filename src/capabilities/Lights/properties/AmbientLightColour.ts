import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { RgbColour } from '../../../values/custom';

@Descriptor({
  id: 4,
  name: 'ambient_light_colour',
  value: RgbColour,
})
export class AmbientLightColour extends Property<typeof RgbColour> {}
