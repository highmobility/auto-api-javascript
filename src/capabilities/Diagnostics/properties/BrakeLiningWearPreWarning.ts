import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 34,
  name: 'brake_lining_wear_pre_warning',
  value: ActiveState,
})
export class BrakeLiningWearPreWarning extends Property<typeof ActiveState> {}
