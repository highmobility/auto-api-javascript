import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  name: 'electronic_stability_program',
  value: ActiveState,
})
export class ElectronicStabilityProgram extends Property<typeof ActiveState> {}
