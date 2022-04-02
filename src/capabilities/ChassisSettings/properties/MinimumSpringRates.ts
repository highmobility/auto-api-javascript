import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { SpringRate } from '../../../values/custom';

@Descriptor({
  id: 7,
  multiple: true,
  name: 'minimum_spring_rates',
  value: SpringRate,
})
export class MinimumSpringRates extends Property<typeof SpringRate> {}
