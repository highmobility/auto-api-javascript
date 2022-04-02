import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const OnOffStateDescriptor = {
  values: {
    off: 0,
    on: 1,
  },
  size: 1,
};

@Descriptor(OnOffStateDescriptor)
export class OnOffState extends Enum<keyof typeof OnOffStateDescriptor.values> {}
