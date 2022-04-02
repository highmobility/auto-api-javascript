import { Descriptor } from '../../../decorators';
import { LaneKeepAssistState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 9,
  multiple: true,
  name: 'lane_keep_assists_states',
  value: LaneKeepAssistState,
})
export class LaneKeepAssistsStates extends Property<typeof LaneKeepAssistState> {}
