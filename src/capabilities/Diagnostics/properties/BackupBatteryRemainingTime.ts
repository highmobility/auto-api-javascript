import { Descriptor } from '../../../decorators';
import { Duration } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 49,
  name: 'backup_battery_remaining_time',
  value: Duration,
})
export class BackupBatteryRemainingTime extends Property<typeof Duration> {}
