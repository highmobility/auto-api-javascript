import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { DefoggingState } from './properties/DefoggingState';
import { DefrostingState } from './properties/DefrostingState';
import { DefrostingTemperatureSetting } from './properties/DefrostingTemperatureSetting';
import { DriverTemperatureSetting } from './properties/DriverTemperatureSetting';
import { HvacState } from './properties/HvacState';
import { HvacWeekdayStartingTimes } from './properties/HvacWeekdayStartingTimes';
import { InsideTemperature } from './properties/InsideTemperature';
import { IonisingState } from './properties/IonisingState';
import { OutsideTemperature } from './properties/OutsideTemperature';
import { PassengerTemperatureSetting } from './properties/PassengerTemperatureSetting';
import { RearTemperatureSetting } from './properties/RearTemperatureSetting';

enum Properties {
  DefoggingState = 'defogging_state',
  DefrostingState = 'defrosting_state',
  DefrostingTemperatureSetting = 'defrosting_temperature_setting',
  DriverTemperatureSetting = 'driver_temperature_setting',
  HvacState = 'hvac_state',
  HvacWeekdayStartingTimes = 'hvac_weekday_starting_times',
  InsideTemperature = 'inside_temperature',
  IonisingState = 'ionising_state',
  OutsideTemperature = 'outside_temperature',
  PassengerTemperatureSetting = 'passenger_temperature_setting',
  RearTemperatureSetting = 'rear_temperature_setting',
}

const ClimateDescriptor = {
  category: 'chassis',
  identifier: [0, 36],
  name: 'climate',
  prettyName: 'Climate',
  properties: {
    defogging_state: DefoggingState,
    defrosting_state: DefrostingState,
    defrosting_temperature_setting: DefrostingTemperatureSetting,
    driver_temperature_setting: DriverTemperatureSetting,
    hvac_state: HvacState,
    hvac_weekday_starting_times: HvacWeekdayStartingTimes,
    inside_temperature: InsideTemperature,
    ionising_state: IonisingState,
    outside_temperature: OutsideTemperature,
    passenger_temperature_setting: PassengerTemperatureSetting,
    rear_temperature_setting: RearTemperatureSetting,
  },
  state: [
    DefoggingState,
    DefrostingState,
    DefrostingTemperatureSetting,
    DriverTemperatureSetting,
    HvacState,
    HvacWeekdayStartingTimes,
    InsideTemperature,
    IonisingState,
    OutsideTemperature,
    PassengerTemperatureSetting,
    RearTemperatureSetting,
  ],
};

@Descriptor(ClimateDescriptor)
export class Climate extends Capability<typeof ClimateDescriptor.properties> {
  public static Name = ClimateDescriptor.name;
  public static Properties = Properties;
}
