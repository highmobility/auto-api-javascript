import { Descriptor } from '../../../decorators';
import { Grade } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 19,
  name: 'rapid_deceleration_grade',
  value: Grade,
})
export class RapidDecelerationGrade extends Property<typeof Grade> {}
