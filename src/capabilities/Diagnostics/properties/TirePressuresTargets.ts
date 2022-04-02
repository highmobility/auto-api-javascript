import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TirePressure } from '../../../values/custom';

@Descriptor({
  id: 47,
  multiple: true,
  name: 'tire_pressures_targets',
  value: TirePressure,
})
export class TirePressuresTargets extends Property<typeof TirePressure> {}
