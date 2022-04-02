import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class DataSlotsFreeUInteger extends UInteger {}

@Descriptor({
  id: 3,
  name: 'data_slots_free',
  value: DataSlotsFreeUInteger,
})
export class DataSlotsFree extends Property<typeof DataSlotsFreeUInteger> {}
