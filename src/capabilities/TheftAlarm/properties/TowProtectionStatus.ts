import { ActiveSelectedState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'tow_protection_status',
  value: ActiveSelectedState,
})
export class TowProtectionStatus extends Property<typeof ActiveSelectedState> {}
