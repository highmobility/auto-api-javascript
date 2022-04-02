import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 5,
  name: 'reverse_light',
  value: ActiveState,
})
export class ReverseLight extends Property<typeof ActiveState> {}
