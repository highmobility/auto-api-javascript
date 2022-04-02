import { Descriptor } from '../../../decorators';
import { EcoDrivingThreshold } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 18,
  multiple: true,
  name: 'thresholds',
  value: EcoDrivingThreshold,
})
export class Thresholds extends Property<typeof EcoDrivingThreshold> {}
