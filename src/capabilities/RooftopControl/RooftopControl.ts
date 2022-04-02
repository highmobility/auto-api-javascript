import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ConvertibleRoofState } from './properties/ConvertibleRoofState';
import { Dimming } from './properties/Dimming';
import { Position } from './properties/Position';
import { SunroofRainEvent } from './properties/SunroofRainEvent';
import { SunroofState } from './properties/SunroofState';
import { SunroofTiltState } from './properties/SunroofTiltState';

enum Properties {
  ConvertibleRoofState = 'convertible_roof_state',
  Dimming = 'dimming',
  Position = 'position',
  SunroofRainEvent = 'sunroof_rain_event',
  SunroofState = 'sunroof_state',
  SunroofTiltState = 'sunroof_tilt_state',
}

const RooftopControlDescriptor = {
  category: 'chassis',
  identifier: [0, 37],
  name: 'rooftop_control',
  prettyName: 'Rooftop Control',
  properties: {
    convertible_roof_state: ConvertibleRoofState,
    dimming: Dimming,
    position: Position,
    sunroof_rain_event: SunroofRainEvent,
    sunroof_state: SunroofState,
    sunroof_tilt_state: SunroofTiltState,
  },
  state: [
    ConvertibleRoofState,
    Dimming,
    Position,
    SunroofRainEvent,
    SunroofState,
    SunroofTiltState,
  ],
};

@Descriptor(RooftopControlDescriptor)
export class RooftopControl extends Capability<typeof RooftopControlDescriptor.properties> {
  public static Name = RooftopControlDescriptor.name;
  public static Properties = Properties;
}
