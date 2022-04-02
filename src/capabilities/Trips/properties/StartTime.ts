import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class StartTimeTimestamp extends Timestamp {}

@Descriptor({
  id: 4,
  name: 'start_time',
  value: StartTimeTimestamp,
})
export class StartTime extends Property<typeof StartTimeTimestamp> {}
