import { Coordinates } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'start_coordinates',
  value: Coordinates,
})
export class StartCoordinates extends Property<typeof Coordinates> {}
