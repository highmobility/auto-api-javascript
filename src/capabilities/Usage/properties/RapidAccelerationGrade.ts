import { Descriptor } from '../../../decorators';
import { Grade } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 18,
  name: 'rapid_acceleration_grade',
  value: Grade,
})
export class RapidAccelerationGrade extends Property<typeof Grade> {}
