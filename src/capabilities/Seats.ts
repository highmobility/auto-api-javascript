import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  PersonsDetected = 'persons_detected',
  SeatbeltsState = 'seatbelts_state',
}

export class Seats extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 86,
  };
  static readonly Name = 'seats';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Seats.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
