import { Descriptor } from '../../../decorators';
import { EnabledState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'start_stop_enabled',
  value: EnabledState,
})
export class StartStopEnabled extends Property<typeof EnabledState> {}
