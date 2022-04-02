import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class NetworkSsidString extends String {}

@Descriptor({
  id: 3,
  name: 'network_ssid',
  value: NetworkSsidString,
})
export class NetworkSsid extends Property<typeof NetworkSsidString> {}
