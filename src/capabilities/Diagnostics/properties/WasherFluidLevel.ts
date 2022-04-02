import { Descriptor } from '../../../decorators';
import { FluidLevel } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'washer_fluid_level',
  value: FluidLevel,
})
export class WasherFluidLevel extends Property<typeof FluidLevel> {}
