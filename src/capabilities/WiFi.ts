import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  NetworkConnected = 'network_connected',
  NetworkSecurity = 'network_security',
  NetworkSsid = 'network_ssid',
  Password = 'password',
  Status = 'status',
}

export class WiFi extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 89,
  };
  static readonly Name = 'wi_fi';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(Configuration.getCapabilityDefinition(WiFi.Name), Configuration.getUniversalProperties());
  }
}
