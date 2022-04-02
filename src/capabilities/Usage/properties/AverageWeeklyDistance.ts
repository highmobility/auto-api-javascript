import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'average_weekly_distance',
  value: Length,
})
export class AverageWeeklyDistance extends Property<typeof Length> {}
