import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class LastEventTimestamp extends Timestamp {}

@Descriptor({
  id: 5,
  name: 'last_event',
  value: LastEventTimestamp,
})
export class LastEvent extends Property<typeof LastEventTimestamp> {}
