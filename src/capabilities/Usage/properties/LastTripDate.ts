import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class LastTripDateTimestamp extends Timestamp {}

@Descriptor({
  id: 13,
  name: 'last_trip_date',
  value: LastTripDateTimestamp,
})
export class LastTripDate extends Property<typeof LastTripDateTimestamp> {}
