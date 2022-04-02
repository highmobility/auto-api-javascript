import { Acceleration } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'accelerations',
  value: Acceleration,
})
export class Accelerations extends Property<typeof Acceleration> {}
