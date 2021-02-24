import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VideoHandover extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 67,
  };
  static readonly Name = 'video_handover';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VideoHandover.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
