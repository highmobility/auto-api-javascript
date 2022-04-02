import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const StatusEnumDescriptor = {
  values: {
    cable_unplugged: 6,
    charging: 1,
    charging_complete: 2,
    charging_error: 5,
    charging_paused: 4,
    discharging: 9,
    fast_charging: 8,
    foreign_object_detected: 10,
    initialising: 3,
    not_charging: 0,
    slow_charging: 7,
  },
  size: 1,
};

@Descriptor(StatusEnumDescriptor)
export class StatusEnum extends Enum<keyof typeof StatusEnumDescriptor.values> {
  public startCharging() {
    this.setValue('charging');
    return this;
  }
  public stopCharging() {
    this.setValue('not_charging');
    return this;
  }
}

@Descriptor({
  id: 23,
  name: 'status',
  value: StatusEnum,
})
export class Status extends Property<typeof StatusEnum> {}
