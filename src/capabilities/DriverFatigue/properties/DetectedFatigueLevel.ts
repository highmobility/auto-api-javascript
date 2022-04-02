import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const DetectedFatigueLevelEnumDescriptor = {
  values: {
    action_needed: 2,
    car_ready_to_take_over: 3,
    light: 0,
    pause_recommended: 1,
  },
  size: 1,
};

@Descriptor(DetectedFatigueLevelEnumDescriptor)
export class DetectedFatigueLevelEnum extends Enum<
  keyof typeof DetectedFatigueLevelEnumDescriptor.values
> {}

@Descriptor({
  id: 1,
  name: 'detected_fatigue_level',
  value: DetectedFatigueLevelEnum,
})
export class DetectedFatigueLevel extends Property<typeof DetectedFatigueLevelEnum> {}
