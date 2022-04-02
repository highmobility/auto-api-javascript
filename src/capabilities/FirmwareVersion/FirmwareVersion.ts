import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ApplicationVersion } from './properties/ApplicationVersion';
import { HmkitBuildName } from './properties/HmkitBuildName';
import { HmkitVersion } from './properties/HmkitVersion';

enum Properties {
  ApplicationVersion = 'application_version',
  HmkitBuildName = 'hmkit_build_name',
  HmkitVersion = 'hmkit_version',
}

const FirmwareVersionDescriptor = {
  category: 'api_structure',
  identifier: [0, 3],
  name: 'firmware_version',
  prettyName: 'Firmware Version',
  properties: {
    application_version: ApplicationVersion,
    hmkit_build_name: HmkitBuildName,
    hmkit_version: HmkitVersion,
  },
  state: [ApplicationVersion, HmkitBuildName, HmkitVersion],
};

@Descriptor(FirmwareVersionDescriptor)
export class FirmwareVersion extends Capability<typeof FirmwareVersionDescriptor.properties> {
  public static Name = FirmwareVersionDescriptor.name;
  public static Properties = Properties;
}
