import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AmbientLightColour = 'ambient_light_colour',
  EmergencyBrakeLight = 'emergency_brake_light',
  FogLights = 'fog_lights',
  FrontExteriorLight = 'front_exterior_light',
  InteriorLights = 'interior_lights',
  ParkingLightStatus = 'parking_light_status',
  ReadingLamps = 'reading_lamps',
  RearExteriorLight = 'rear_exterior_light',
  ReverseLight = 'reverse_light',
  SwitchPosition = 'switch_position',
}

export class Lights extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 54,
  };
  static readonly Name = 'lights';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Lights.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
