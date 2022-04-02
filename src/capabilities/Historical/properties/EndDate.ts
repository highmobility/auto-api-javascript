import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class EndDateTimestamp extends Timestamp {}

@Descriptor({
  id: 4,
  name: 'end_date',
  value: EndDateTimestamp,
})
export class EndDate extends Property<typeof EndDateTimestamp> {}
