import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class VideoHandover extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 67,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('video_handover'),
      Configuration.getUniversalProperties(),
    );
  }
}
