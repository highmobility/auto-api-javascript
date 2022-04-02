import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { WindowPosition } from '../../../values/custom';

@Descriptor({
  id: 3,
  multiple: true,
  name: 'positions',
  value: WindowPosition,
})
export class Positions extends Property<typeof WindowPosition> {}
