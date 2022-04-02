import { ActiveState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'cruise_control',
  value: ActiveState,
})
export class CruiseControl extends Property<typeof ActiveState> {}
