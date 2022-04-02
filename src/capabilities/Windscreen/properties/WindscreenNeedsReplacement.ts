import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const WindscreenNeedsReplacementEnumDescriptor = {
  values: {
    no_replacement_needed: 1,
    replacement_needed: 2,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(WindscreenNeedsReplacementEnumDescriptor)
export class WindscreenNeedsReplacementEnum extends Enum<
  keyof typeof WindscreenNeedsReplacementEnumDescriptor.values
> {}

@Descriptor({
  id: 6,
  name: 'windscreen_needs_replacement',
  value: WindscreenNeedsReplacementEnum,
})
export class WindscreenNeedsReplacement extends Property<typeof WindscreenNeedsReplacementEnum> {}
