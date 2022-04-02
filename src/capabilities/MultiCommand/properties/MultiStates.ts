import { CapabilityState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'multi_states',
  value: CapabilityState,
})
export class MultiStates extends Property<typeof CapabilityState> {}
