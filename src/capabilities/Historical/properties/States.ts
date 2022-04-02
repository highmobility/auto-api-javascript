import { CapabilityState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'states',
  value: CapabilityState,
})
export class States extends Property<typeof CapabilityState> {}
