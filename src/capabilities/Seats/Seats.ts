import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { PersonsDetected } from './properties/PersonsDetected';
import { SeatbeltsState } from './properties/SeatbeltsState';

enum Properties {
  PersonsDetected = 'persons_detected',
  SeatbeltsState = 'seatbelts_state',
}

const SeatsDescriptor = {
  category: 'chassis',
  identifier: [0, 86],
  name: 'seats',
  prettyName: 'Seats',
  properties: {
    persons_detected: PersonsDetected,
    seatbelts_state: SeatbeltsState,
  },
  state: [PersonsDetected, SeatbeltsState],
};

@Descriptor(SeatsDescriptor)
export class Seats extends Capability<typeof SeatsDescriptor.properties> {
  public static Name = SeatsDescriptor.name;
  public static Properties = Properties;
}
