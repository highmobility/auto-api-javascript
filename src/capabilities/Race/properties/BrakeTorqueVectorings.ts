import { BrakeTorqueVectoring } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  multiple: true,
  name: 'brake_torque_vectorings',
  value: BrakeTorqueVectoring,
})
export class BrakeTorqueVectorings extends Property<typeof BrakeTorqueVectoring> {}
