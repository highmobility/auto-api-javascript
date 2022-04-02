import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { SpringRate } from '../../../values/custom';

@Descriptor({
  id: 6,
  multiple: true,
  name: 'maximum_spring_rates',
  value: SpringRate,
})
export class MaximumSpringRates extends Property<typeof SpringRate> {}
