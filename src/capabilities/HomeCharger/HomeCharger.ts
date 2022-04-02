import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AuthenticationMechanism } from './properties/AuthenticationMechanism';
import { AuthenticationState } from './properties/AuthenticationState';
import { ChargeCurrent } from './properties/ChargeCurrent';
import { ChargingPower } from './properties/ChargingPower';
import { ChargingStatus } from './properties/ChargingStatus';
import { Coordinates } from './properties/Coordinates';
import { MaximumChargeCurrent } from './properties/MaximumChargeCurrent';
import { MinimumChargeCurrent } from './properties/MinimumChargeCurrent';
import { PlugType } from './properties/PlugType';
import { PriceTariffs } from './properties/PriceTariffs';
import { SolarCharging } from './properties/SolarCharging';
import { WiFiHotspotEnabled } from './properties/WiFiHotspotEnabled';
import { WiFiHotspotPassword } from './properties/WiFiHotspotPassword';
import { WiFiHotspotSecurity } from './properties/WiFiHotspotSecurity';
import { WiFiHotspotSsid } from './properties/WiFiHotspotSsid';

enum Properties {
  AuthenticationMechanism = 'authentication_mechanism',
  AuthenticationState = 'authentication_state',
  ChargeCurrent = 'charge_current',
  ChargingPower = 'charging_power',
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

const HomeChargerDescriptor = {
  category: 'infrastructure',
  identifier: [0, 96],
  name: 'home_charger',
  prettyName: 'Home Charger',
  properties: {
    authentication_mechanism: AuthenticationMechanism,
    authentication_state: AuthenticationState,
    charge_current: ChargeCurrent,
    charging_power: ChargingPower,
    charging_status: ChargingStatus,
    coordinates: Coordinates,
    maximum_charge_current: MaximumChargeCurrent,
    minimum_charge_current: MinimumChargeCurrent,
    plug_type: PlugType,
    price_tariffs: PriceTariffs,
    solar_charging: SolarCharging,
    wi_fi_hotspot_enabled: WiFiHotspotEnabled,
    wi_fi_hotspot_password: WiFiHotspotPassword,
    wi_fi_hotspot_security: WiFiHotspotSecurity,
    wi_fi_hotspot_ssid: WiFiHotspotSsid,
  },
  state: [
    AuthenticationMechanism,
    AuthenticationState,
    ChargeCurrent,
    ChargingPower,
    ChargingStatus,
    Coordinates,
    MaximumChargeCurrent,
    MinimumChargeCurrent,
    PlugType,
    PriceTariffs,
    SolarCharging,
    WiFiHotspotEnabled,
    WiFiHotspotPassword,
    WiFiHotspotSecurity,
    WiFiHotspotSsid,
  ],
};

@Descriptor(HomeChargerDescriptor)
export class HomeCharger extends Capability<typeof HomeChargerDescriptor.properties> {
  public static Name = HomeChargerDescriptor.name;
  public static Properties = Properties;
}
