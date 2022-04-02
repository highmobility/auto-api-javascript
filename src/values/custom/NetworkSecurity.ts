import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const NetworkSecurityDescriptor = {
  values: {
    none: 0,
    wep: 1,
    wpa: 2,
    wpa2_personal: 3,
  },
  size: 1,
};

@Descriptor(NetworkSecurityDescriptor)
export class NetworkSecurity extends Enum<keyof typeof NetworkSecurityDescriptor.values> {}
