import { Descriptor } from '../../../decorators';
import { FluidLevel } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 51,
  name: 'engine_oil_fluid_level',
  value: FluidLevel,
})
export class EngineOilFluidLevel extends Property<typeof FluidLevel> {}
