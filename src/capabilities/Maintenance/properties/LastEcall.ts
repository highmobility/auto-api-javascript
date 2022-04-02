import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class LastEcallTimestamp extends Timestamp {}

@Descriptor({
  id: 16,
  name: 'last_ecall',
  value: LastEcallTimestamp,
})
export class LastEcall extends Property<typeof LastEcallTimestamp> {}
