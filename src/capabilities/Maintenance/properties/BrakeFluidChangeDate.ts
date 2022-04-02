import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class BrakeFluidChangeDateTimestamp extends Timestamp {}

@Descriptor({
  id: 12,
  name: 'brake_fluid_change_date',
  value: BrakeFluidChangeDateTimestamp,
})
export class BrakeFluidChangeDate extends Property<typeof BrakeFluidChangeDateTimestamp> {}
