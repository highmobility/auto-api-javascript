import { Descriptor, Size } from '../../decorators';
import { Property } from '../../core/Property';
import { Timestamp as TimestampValue } from '../../values/base/Timestamp';

@Size(8)
export class TimestampTimestamp extends TimestampValue {}

@Descriptor({
  id: 162,
  name: 'timestamp',
  value: TimestampTimestamp,
})
export class Timestamp extends Property<typeof TimestampTimestamp> {}
