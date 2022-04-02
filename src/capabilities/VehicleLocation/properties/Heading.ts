import { Angle } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'heading',
  value: Angle,
})
export class Heading extends Property<typeof Angle> {}
