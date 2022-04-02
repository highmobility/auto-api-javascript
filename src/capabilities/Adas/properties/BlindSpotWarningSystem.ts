import { Descriptor } from '../../../decorators';
import { OnOffState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  name: 'blind_spot_warning_system',
  value: OnOffState,
})
export class BlindSpotWarningSystem extends Property<typeof OnOffState> {}
