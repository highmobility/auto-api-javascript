import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SunroofRainEventEnumDescriptor = {
  values: {
    automatically_in_stroke_position: 2,
    in_stroke_position_because_of_rain: 1,
    no_event: 0,
  },
  size: 1,
};

@Descriptor(SunroofRainEventEnumDescriptor)
export class SunroofRainEventEnum extends Enum<
  keyof typeof SunroofRainEventEnumDescriptor.values
> {}

@Descriptor({
  id: 6,
  name: 'sunroof_rain_event',
  value: SunroofRainEventEnum,
})
export class SunroofRainEvent extends Property<typeof SunroofRainEventEnum> {}
