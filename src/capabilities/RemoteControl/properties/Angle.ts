import { Angle as AngleUnit } from '../../../values/units';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'angle',
  value: AngleUnit,
})
export class Angle extends Property<typeof AngleUnit> {}
