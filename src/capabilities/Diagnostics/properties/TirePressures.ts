import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TirePressure } from '../../../values/custom';

@Descriptor({
  id: 26,
  multiple: true,
  name: 'tire_pressures',
  value: TirePressure,
})
export class TirePressures extends Property<typeof TirePressure> {}
