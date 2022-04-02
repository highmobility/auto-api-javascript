import { Descriptor } from '../../../decorators';
import { FluidLevel } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 50,
  name: 'engine_coolant_fluid_level',
  value: FluidLevel,
})
export class EngineCoolantFluidLevel extends Property<typeof FluidLevel> {}
