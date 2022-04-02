import { CapabilityState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'multi_commands',
  value: CapabilityState,
})
export class MultiCommands extends Property<typeof CapabilityState> {}
