import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { SpringRate } from '../../../values/custom';

@Descriptor({
  id: 5,
  multiple: true,
  name: 'current_spring_rates',
  value: SpringRate,
})
export class CurrentSpringRates extends Property<typeof SpringRate> {}
