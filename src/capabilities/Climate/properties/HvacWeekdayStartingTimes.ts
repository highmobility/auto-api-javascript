import { Descriptor } from '../../../decorators';
import { HvacWeekdayStartingTime } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  multiple: true,
  name: 'hvac_weekday_starting_times',
  value: HvacWeekdayStartingTime,
})
export class HvacWeekdayStartingTimes extends Property<typeof HvacWeekdayStartingTime> {}
