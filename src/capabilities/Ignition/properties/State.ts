import { Descriptor } from '../../../decorators';
import { IgnitionState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  name: 'state',
  value: IgnitionState,
})
export class State extends Property<typeof IgnitionState> {}
