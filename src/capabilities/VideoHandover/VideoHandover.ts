import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Screen } from './properties/Screen';
import { StartingTime } from './properties/StartingTime';
import { Url } from './properties/Url';

enum Properties {
  Screen = 'screen',
  StartingTime = 'starting_time',
  Url = 'url',
}

const VideoHandoverDescriptor = {
  category: 'headunit',
  identifier: [0, 67],
  name: 'video_handover',
  prettyName: 'Video Handover',
  properties: {
    screen: Screen,
    starting_time: StartingTime,
    url: Url,
  },
  state: [],
};

@Descriptor(VideoHandoverDescriptor)
export class VideoHandover extends Capability<typeof VideoHandoverDescriptor.properties> {
  public static Name = VideoHandoverDescriptor.name;
  public static Properties = Properties;
}
