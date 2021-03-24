import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AuthenticationMechanism = 'authentication_mechanism',
  AuthenticationState = 'authentication_state',
  ChargeCurrent = 'charge_current',
  ChargingPower = 'charging_power',
  ChargingPowerKw = 'charging_power_kw',
  ChargingStatus = 'charging_status',
  Coordinates = 'coordinates',
  MaximumChargeCurrent = 'maximum_charge_current',
  MinimumChargeCurrent = 'minimum_charge_current',
  PlugType = 'plug_type',
  PriceTariffs = 'price_tariffs',
  SolarCharging = 'solar_charging',
  WiFiHotspotEnabled = 'wi_fi_hotspot_enabled',
  WiFiHotspotPassword = 'wi_fi_hotspot_password',
  WiFiHotspotSecurity = 'wi_fi_hotspot_security',
  WiFiHotspotSsid = 'wi_fi_hotspot_ssid',
}

export class HomeCharger extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 96,
  };
  static readonly Name = 'home_charger';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(HomeCharger.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
