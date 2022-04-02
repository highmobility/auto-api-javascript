import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const EngineTypeDescriptor = {
  values: {
    all_electric: 1,
    cng: 11,
    combustion_engine: 2,
    diesel: 9,
    electric: 7,
    gas: 8,
    gasoline: 10,
    hydrogen: 4,
    hydrogen_hybrid: 5,
    lpg: 12,
    petrol: 6,
    phev: 3,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(EngineTypeDescriptor)
export class EngineType extends Enum<keyof typeof EngineTypeDescriptor.values> {}
