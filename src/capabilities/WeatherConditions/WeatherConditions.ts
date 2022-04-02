import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { RainIntensity } from './properties/RainIntensity';

enum Properties {
  RainIntensity = 'rain_intensity',
}

const WeatherConditionsDescriptor = {
  category: 'environment',
  identifier: [0, 85],
  name: 'weather_conditions',
  prettyName: 'Weather Conditions',
  properties: {
    rain_intensity: RainIntensity,
  },
  state: [RainIntensity],
};

@Descriptor(WeatherConditionsDescriptor)
export class WeatherConditions extends Capability<typeof WeatherConditionsDescriptor.properties> {
  public static Name = WeatherConditionsDescriptor.name;
  public static Properties = Properties;
}
