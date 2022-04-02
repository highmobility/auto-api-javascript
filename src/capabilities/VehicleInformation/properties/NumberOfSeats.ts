import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class NumberOfSeatsUInteger extends UInteger {}

@Descriptor({
  id: 11,
  name: 'number_of_seats',
  value: NumberOfSeatsUInteger,
})
export class NumberOfSeats extends Property<typeof NumberOfSeatsUInteger> {}
