import { Descriptor } from '../../../decorators';
import { Grade } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 20,
  name: 'late_night_grade',
  value: Grade,
})
export class LateNightGrade extends Property<typeof Grade> {}
