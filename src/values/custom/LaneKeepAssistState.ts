import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

import { ActiveState } from './';

const LaneKeepAssistStateLocationDescriptor = {
  values: {
    left: 0,
    right: 1,
  },
  size: 1,
};

@Descriptor(LaneKeepAssistStateLocationDescriptor)
export class LaneKeepAssistStateLocation extends Enum<
  keyof typeof LaneKeepAssistStateLocationDescriptor.values
> {}

const LaneKeepAssistStateDescriptor = {
  items: {
    location: LaneKeepAssistStateLocation,
    state: ActiveState,
  },
  order: ['location', 'state'],
  size: 2,
};

@Descriptor(LaneKeepAssistStateDescriptor)
export class LaneKeepAssistState extends CustomType<typeof LaneKeepAssistStateDescriptor.items> {}
