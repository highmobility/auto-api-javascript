import { Descriptor } from '../../../decorators';
import { EnabledState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'automatic_ecall',
  value: EnabledState,
})
export class AutomaticEcall extends Property<typeof EnabledState> {}
