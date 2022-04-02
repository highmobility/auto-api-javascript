import { Descriptor } from '../../../decorators';
import { OnOffState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'lane_keep_assist_system',
  value: OnOffState,
})
export class LaneKeepAssistSystem extends Property<typeof OnOffState> {}
