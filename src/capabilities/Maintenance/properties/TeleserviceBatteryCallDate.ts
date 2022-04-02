import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class TeleserviceBatteryCallDateTimestamp extends Timestamp {}

@Descriptor({
  id: 9,
  name: 'teleservice_battery_call_date',
  value: TeleserviceBatteryCallDateTimestamp,
})
export class TeleserviceBatteryCallDate extends Property<
  typeof TeleserviceBatteryCallDateTimestamp
> {}
