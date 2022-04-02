import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'average_weekly_distance_long_run',
  value: Length,
})
export class AverageWeeklyDistanceLongRun extends Property<typeof Length> {}
