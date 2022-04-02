import { Descriptor } from '../../../decorators';
import { Lock } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'inside_locks',
  value: Lock,
})
export class InsideLocks extends Property<typeof Lock> {}
