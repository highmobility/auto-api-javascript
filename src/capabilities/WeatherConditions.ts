import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class WeatherConditions extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 85,
  };
  static readonly Name = 'weather_conditions';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(WeatherConditions.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
