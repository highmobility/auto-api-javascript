import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class WiFiHotspotSsidString extends String {}

@Descriptor({
  id: 9,
  name: 'wi_fi_hotspot_ssid',
  value: WiFiHotspotSsidString,
})
export class WiFiHotspotSsid extends Property<typeof WiFiHotspotSsidString> {}
