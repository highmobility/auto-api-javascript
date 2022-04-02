import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'status',
  value: ActiveState,
})
export class Status extends Property<typeof ActiveState> {}
