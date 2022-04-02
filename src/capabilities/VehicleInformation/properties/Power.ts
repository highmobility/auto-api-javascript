import { Descriptor } from '../../../decorators';
import { Power as PowerUnit } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 19,
  name: 'power',
  value: PowerUnit,
})
export class Power extends Property<typeof PowerUnit> {}
