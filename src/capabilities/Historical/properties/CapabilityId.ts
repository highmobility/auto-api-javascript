import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(2)
export class CapabilityIdUInteger extends UInteger {}

@Descriptor({
  id: 2,
  name: 'capability_id',
  value: CapabilityIdUInteger,
})
export class CapabilityId extends Property<typeof CapabilityIdUInteger> {}
