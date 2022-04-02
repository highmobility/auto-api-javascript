import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const DetectedDescriptor = {
  values: {
    detected: 1,
    not_detected: 0,
  },
  size: 1,
};

@Descriptor(DetectedDescriptor)
export class Detected extends Enum<keyof typeof DetectedDescriptor.values> {}
