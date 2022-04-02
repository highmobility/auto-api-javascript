import { ConnectionState } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  name: 'network_connected',
  value: ConnectionState,
})
export class NetworkConnected extends Property<typeof ConnectionState> {}
