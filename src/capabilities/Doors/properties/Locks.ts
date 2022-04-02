import { Descriptor } from '../../../decorators';
import { Lock } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  multiple: true,
  name: 'locks',
  value: Lock,
})
export class Locks extends Property<typeof Lock> {}
