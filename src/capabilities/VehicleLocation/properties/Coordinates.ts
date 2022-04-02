import { Coordinates as CoordinatesCustomType } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'coordinates',
  value: CoordinatesCustomType,
})
export class Coordinates extends Property<typeof CoordinatesCustomType> {}
