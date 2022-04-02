import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { NetworkConnected } from './properties/NetworkConnected';
import { NetworkSecurity } from './properties/NetworkSecurity';
import { NetworkSsid } from './properties/NetworkSsid';
import { Password } from './properties/Password';
import { Status } from './properties/Status';

enum Properties {
  NetworkConnected = 'network_connected',
  NetworkSecurity = 'network_security',
  NetworkSsid = 'network_ssid',
  Password = 'password',
  Status = 'status',
}

const WiFiDescriptor = {
  category: 'headunit',
  identifier: [0, 89],
  name: 'wi_fi',
  prettyName: 'Wi-Fi',
  properties: {
    network_connected: NetworkConnected,
    network_security: NetworkSecurity,
    network_ssid: NetworkSsid,
    password: Password,
    status: Status,
  },
  state: [NetworkConnected, NetworkSecurity, NetworkSsid, Status],
};

@Descriptor(WiFiDescriptor)
export class WiFi extends Capability<typeof WiFiDescriptor.properties> {
  public static Name = WiFiDescriptor.name;
  public static Properties = Properties;
}
