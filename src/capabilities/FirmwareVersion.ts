import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class FirmwareVersion extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 3,
  };
  static readonly Name = 'firmware_version';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(FirmwareVersion.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
