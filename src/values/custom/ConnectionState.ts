import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const ConnectionStateDescriptor = {
  values: {
    connected: 1,
    disconnected: 0,
  },
  size: 1,
};

@Descriptor(ConnectionStateDescriptor)
export class ConnectionState extends Enum<keyof typeof ConnectionStateDescriptor.values> {}
