import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class AutomaticTeleserviceCallDateTimestamp extends Timestamp {}

@Descriptor({
  id: 8,
  name: 'automatic_teleservice_call_date',
  value: AutomaticTeleserviceCallDateTimestamp,
})
export class AutomaticTeleserviceCallDate extends Property<
  typeof AutomaticTeleserviceCallDateTimestamp
> {}
