import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const ImpactZoneEnumDescriptor = {
  values: {
    front_driver_side: 7,
    front_passenger_side: 6,
    predestrian_protection: 0,
    rear_driver_side: 3,
    rear_passenger_side: 2,
    rollover: 1,
    side_driver_side: 5,
    side_passenger_side: 4,
  },
  size: 1,
};

@Descriptor(ImpactZoneEnumDescriptor)
export class ImpactZoneEnum extends Enum<keyof typeof ImpactZoneEnumDescriptor.values> {}

@Descriptor({
  id: 6,
  name: 'impact_zone',
  value: ImpactZoneEnum,
})
export class ImpactZone extends Property<typeof ImpactZoneEnum> {}
