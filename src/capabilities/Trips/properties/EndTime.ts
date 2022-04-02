import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class EndTimeTimestamp extends Timestamp {}

@Descriptor({
  id: 5,
  name: 'end_time',
  value: EndTimeTimestamp,
})
export class EndTime extends Property<typeof EndTimeTimestamp> {}
