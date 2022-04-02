import { Descriptor } from '../../../decorators';
import { NetworkSecurity } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 10,
  name: 'wi_fi_hotspot_security',
  value: NetworkSecurity,
})
export class WiFiHotspotSecurity extends Property<typeof NetworkSecurity> {}
