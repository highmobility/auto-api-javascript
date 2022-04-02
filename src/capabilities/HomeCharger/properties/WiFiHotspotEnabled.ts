import { Descriptor } from '../../../decorators';
import { EnabledState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 8,
  name: 'wi_fi_hotspot_enabled',
  value: EnabledState,
})
export class WiFiHotspotEnabled extends Property<typeof EnabledState> {}
