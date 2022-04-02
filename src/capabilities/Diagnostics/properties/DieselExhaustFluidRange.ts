import { Descriptor } from '../../../decorators';
import { Length } from '../../../values/units';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 37,
  name: 'diesel_exhaust_fluid_range',
  value: Length,
})
export class DieselExhaustFluidRange extends Property<typeof Length> {}
