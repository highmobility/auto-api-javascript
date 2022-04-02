import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class DataSlotsMaxUInteger extends UInteger {}

@Descriptor({
  id: 4,
  name: 'data_slots_max',
  value: DataSlotsMaxUInteger,
})
export class DataSlotsMax extends Property<typeof DataSlotsMaxUInteger> {}
