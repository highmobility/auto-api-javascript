import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { GasFlapLock } from './properties/GasFlapLock';
import { GasFlapPosition } from './properties/GasFlapPosition';

enum Properties {
  GasFlapLock = 'gas_flap_lock',
  GasFlapPosition = 'gas_flap_position',
}

const FuelingDescriptor = {
  category: 'parking',
  identifier: [0, 64],
  name: 'fueling',
  prettyName: 'Fueling',
  properties: {
    gas_flap_lock: GasFlapLock,
    gas_flap_position: GasFlapPosition,
  },
  state: [GasFlapLock, GasFlapPosition],
};

@Descriptor(FuelingDescriptor)
export class Fueling extends Capability<typeof FuelingDescriptor.properties> {
  public static Name = FuelingDescriptor.name;
  public static Properties = Properties;
}
