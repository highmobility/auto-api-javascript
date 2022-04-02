import { ActiveSelectedState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'interior_protection_status',
  value: ActiveSelectedState,
})
export class InteriorProtectionStatus extends Property<typeof ActiveSelectedState> {}
