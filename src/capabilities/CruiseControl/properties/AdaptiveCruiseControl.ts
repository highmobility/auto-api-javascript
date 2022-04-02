import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'adaptive_cruise_control',
  value: ActiveState,
})
export class AdaptiveCruiseControl extends Property<typeof ActiveState> {}
