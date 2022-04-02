import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class WiFiHotspotPasswordString extends String {}

@Descriptor({
  id: 11,
  name: 'wi_fi_hotspot_password',
  value: WiFiHotspotPasswordString,
})
export class WiFiHotspotPassword extends Property<typeof WiFiHotspotPasswordString> {}
