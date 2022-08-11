import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AirConditionerCompressorPower = 'air_conditioner_compressor_power',
  DefoggingState = 'defogging_state',
  DefrostingState = 'defrosting_state',
  DefrostingTemperatureSetting = 'defrosting_temperature_setting',
  DriverTemperatureSetting = 'driver_temperature_setting',
  Humidity = 'humidity',
  HvacState = 'hvac_state',
  HvacWeekdayStartingTimes = 'hvac_weekday_starting_times',
  InsideTemperature = 'inside_temperature',
  IonisingState = 'ionising_state',
  OutsideTemperature = 'outside_temperature',
  PassengerTemperatureSetting = 'passenger_temperature_setting',
  RearTemperatureSetting = 'rear_temperature_setting',
}

export class Climate extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 36,
  };
  static readonly Name = 'climate';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Climate.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
