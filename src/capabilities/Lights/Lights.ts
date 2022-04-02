import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AmbientLightColour } from './properties/AmbientLightColour';
import { EmergencyBrakeLight } from './properties/EmergencyBrakeLight';
import { FogLights } from './properties/FogLights';
import { FrontExteriorLight } from './properties/FrontExteriorLight';
import { InteriorLights } from './properties/InteriorLights';
import { ParkingLightStatus } from './properties/ParkingLightStatus';
import { ReadingLamps } from './properties/ReadingLamps';
import { RearExteriorLight } from './properties/RearExteriorLight';
import { ReverseLight } from './properties/ReverseLight';
import { SwitchPosition } from './properties/SwitchPosition';

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

const LightsDescriptor = {
  category: 'chassis',
  identifier: [0, 54],
  name: 'lights',
  prettyName: 'Lights',
  properties: {
    ambient_light_colour: AmbientLightColour,
    emergency_brake_light: EmergencyBrakeLight,
    fog_lights: FogLights,
    front_exterior_light: FrontExteriorLight,
    interior_lights: InteriorLights,
    parking_light_status: ParkingLightStatus,
    reading_lamps: ReadingLamps,
    rear_exterior_light: RearExteriorLight,
    reverse_light: ReverseLight,
    switch_position: SwitchPosition,
  },
  state: [
    AmbientLightColour,
    EmergencyBrakeLight,
    FogLights,
    FrontExteriorLight,
    InteriorLights,
    ParkingLightStatus,
    ReadingLamps,
    RearExteriorLight,
    ReverseLight,
    SwitchPosition,
  ],
};

@Descriptor(LightsDescriptor)
export class Lights extends Capability<typeof LightsDescriptor.properties> {
  public static Name = LightsDescriptor.name;
  public static Properties = Properties;
}
