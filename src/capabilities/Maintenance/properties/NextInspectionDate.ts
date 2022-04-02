import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class NextInspectionDateTimestamp extends Timestamp {}

@Descriptor({
  id: 10,
  name: 'next_inspection_date',
  value: NextInspectionDateTimestamp,
})
export class NextInspectionDate extends Property<typeof NextInspectionDateTimestamp> {}
