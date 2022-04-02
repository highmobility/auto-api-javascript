import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class StartDateTimestamp extends Timestamp {}

@Descriptor({
  id: 3,
  name: 'start_date',
  value: StartDateTimestamp,
})
export class StartDate extends Property<typeof StartDateTimestamp> {}
