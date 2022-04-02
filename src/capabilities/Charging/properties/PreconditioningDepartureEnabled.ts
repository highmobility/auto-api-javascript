import { Descriptor } from '../../../decorators';
import { EnabledState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 34,
  name: 'preconditioning_departure_enabled',
  value: EnabledState,
})
export class PreconditioningDepartureEnabled extends Property<typeof EnabledState> {}
