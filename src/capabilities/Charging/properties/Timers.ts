import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timer } from '../../../values/custom';

@Descriptor({
  id: 21,
  multiple: true,
  name: 'timers',
  value: Timer,
})
export class Timers extends Property<typeof Timer> {}
