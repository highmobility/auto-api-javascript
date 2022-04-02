import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'blind_spot_warning_state',
  value: ActiveState,
})
export class BlindSpotWarningState extends Property<typeof ActiveState> {}
