import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  RainIntensity = 'rain_intensity',
}

export class WeatherConditions extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 85,
  };
  static readonly Name = 'weather_conditions';
  static readonly Properties = Properties;
  static readonly UniversalProperties = UniversalProperties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(WeatherConditions.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
