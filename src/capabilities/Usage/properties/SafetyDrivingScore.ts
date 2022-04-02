import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 17,
  name: 'safety_driving_score',
  value: Percentage,
})
export class SafetyDrivingScore extends Property<typeof Percentage> {}
