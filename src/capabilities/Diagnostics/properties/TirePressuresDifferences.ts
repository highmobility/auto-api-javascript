import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TirePressure } from '../../../values/custom';

@Descriptor({
  id: 48,
  multiple: true,
  name: 'tire_pressures_differences',
  value: TirePressure,
})
export class TirePressuresDifferences extends Property<typeof TirePressure> {}
