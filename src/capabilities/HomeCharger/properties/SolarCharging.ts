import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'solar_charging',
  value: ActiveState,
})
export class SolarCharging extends Property<typeof ActiveState> {}
