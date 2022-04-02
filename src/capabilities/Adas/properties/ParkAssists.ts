import { Descriptor } from '../../../decorators';
import { ParkAssist } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  multiple: true,
  name: 'park_assists',
  value: ParkAssist,
})
export class ParkAssists extends Property<typeof ParkAssist> {}
