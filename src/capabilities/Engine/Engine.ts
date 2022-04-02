import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { StartStopEnabled } from './properties/StartStopEnabled';
import { StartStopState } from './properties/StartStopState';
import { Status } from './properties/Status';

enum Properties {
  StartStopEnabled = 'start_stop_enabled',
  StartStopState = 'start_stop_state',
  Status = 'status',
}

const EngineDescriptor = {
  category: 'digital_key',
  identifier: [0, 105],
  name: 'engine',
  prettyName: 'Engine',
  properties: {
    start_stop_enabled: StartStopEnabled,
    start_stop_state: StartStopState,
    status: Status,
  },
  state: [StartStopEnabled, StartStopState, Status],
};

@Descriptor(EngineDescriptor)
export class Engine extends Capability<typeof EngineDescriptor.properties> {
  public static Name = EngineDescriptor.name;
  public static Properties = Properties;
}
