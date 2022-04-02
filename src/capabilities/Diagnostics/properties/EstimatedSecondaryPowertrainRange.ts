import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 45,
  name: 'estimated_secondary_powertrain_range',
  value: Length,
})
export class EstimatedSecondaryPowertrainRange extends Property<typeof Length> {}
