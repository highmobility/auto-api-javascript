import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { ReadingLamp } from '../../../values/custom';

@Descriptor({
  id: 8,
  multiple: true,
  name: 'reading_lamps',
  value: ReadingLamp,
})
export class ReadingLamps extends Property<typeof ReadingLamp> {}
