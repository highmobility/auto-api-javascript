import { Descriptor } from '../../../decorators';
import { Frequency } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'heart_rate',
  value: Frequency,
})
export class HeartRate extends Property<typeof Frequency> {}
