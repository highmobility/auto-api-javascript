import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Screen = 'screen',
  StartingSecond = 'starting_second',
  StartingTime = 'starting_time',
  Url = 'url',
}

export class VideoHandover extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 67,
  };
  static readonly Name = 'video_handover';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VideoHandover.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
