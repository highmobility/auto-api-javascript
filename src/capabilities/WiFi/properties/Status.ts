import { Descriptor } from '../../../decorators';
import { EnabledState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'status',
  value: EnabledState,
})
export class Status extends Property<typeof EnabledState> {}
