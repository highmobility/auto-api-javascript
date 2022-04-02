import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Speed as SpeedUnit } from '../../../values/units';

@Descriptor({
  id: 3,
  name: 'speed',
  value: SpeedUnit,
})
export class Speed extends Property<typeof SpeedUnit> {}
