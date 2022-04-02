import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TirePressureStatus } from '../../../values/custom';

@Descriptor({
  id: 33,
  multiple: true,
  name: 'tire_pressure_statuses',
  value: TirePressureStatus,
})
export class TirePressureStatuses extends Property<typeof TirePressureStatus> {}
