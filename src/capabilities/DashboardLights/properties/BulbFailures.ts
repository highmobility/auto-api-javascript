import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const BulbFailuresEnumDescriptor = {
  values: {
    day_running: 12,
    fog_light_front: 8,
    fog_light_rear: 9,
    high_beam: 5,
    high_beam_left: 6,
    high_beam_right: 7,
    low_beam: 2,
    low_beam_left: 3,
    low_beam_right: 4,
    multiple: 18,
    position: 11,
    stop: 10,
    trailer_electrical_failure: 17,
    trailer_stop: 16,
    trailer_turn: 13,
    trailer_turn_left: 14,
    trailer_turn_right: 15,
    turn_signal_left: 0,
    turn_signal_right: 1,
  },
  size: 1,
};

@Descriptor(BulbFailuresEnumDescriptor)
export class BulbFailuresEnum extends Enum<keyof typeof BulbFailuresEnumDescriptor.values> {}

@Descriptor({
  id: 2,
  multiple: true,
  name: 'bulb_failures',
  value: BulbFailuresEnum,
})
export class BulbFailures extends Property<typeof BulbFailuresEnum> {}
