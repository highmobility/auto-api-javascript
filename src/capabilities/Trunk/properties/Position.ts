import { Descriptor } from '../../../decorators';
import { Position as PositionCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'position',
  value: PositionCustomType,
})
export class Position extends Property<typeof PositionCustomType> {}
