import { Descriptor } from '../../../decorators';
import { DoorPosition } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  multiple: true,
  name: 'positions',
  value: DoorPosition,
})
export class Positions extends Property<typeof DoorPosition> {}
