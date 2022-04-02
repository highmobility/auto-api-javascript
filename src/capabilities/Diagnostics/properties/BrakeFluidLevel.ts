import { Descriptor } from '../../../decorators';
import { FluidLevel } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 20,
  name: 'brake_fluid_level',
  value: FluidLevel,
})
export class BrakeFluidLevel extends Property<typeof FluidLevel> {}
