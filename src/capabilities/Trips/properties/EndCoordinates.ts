import { Coordinates } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'end_coordinates',
  value: Coordinates,
})
export class EndCoordinates extends Property<typeof Coordinates> {}
