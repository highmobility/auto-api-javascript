import { Descriptor } from '../../../decorators';
import { NetworkSecurity as NetworkSecurityCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 4,
  name: 'network_security',
  value: NetworkSecurityCustomType,
})
export class NetworkSecurity extends Property<typeof NetworkSecurityCustomType> {}
