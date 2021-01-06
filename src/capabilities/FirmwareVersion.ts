import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class FirmwareVersion extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 3,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('firmware_version'),
      Configuration.getUniversalProperties(),
    );
  }
}
