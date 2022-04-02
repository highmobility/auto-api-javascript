import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const StartStopDescriptor = {
  values: {
    start: 0,
    stop: 1,
  },
  size: 1,
};

@Descriptor(StartStopDescriptor)
export class StartStop extends Enum<keyof typeof StartStopDescriptor.values> {}
