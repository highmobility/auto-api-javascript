import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ApplicationVersion = 'application_version',
  HmkitBuildName = 'hmkit_build_name',
  HmkitVersion = 'hmkit_version',
}

export class FirmwareVersion extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 3,
  };
  static readonly Name = 'firmware_version';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(FirmwareVersion.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
