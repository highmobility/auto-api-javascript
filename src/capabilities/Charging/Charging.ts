import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { BatteryCapacity } from './properties/BatteryCapacity';
import { BatteryCurrent } from './properties/BatteryCurrent';
import { BatteryLevel } from './properties/BatteryLevel';
import { BatteryLevelAtDeparture } from './properties/BatteryLevelAtDeparture';
import { BatteryTemperature } from './properties/BatteryTemperature';
import { ChargeLimit } from './properties/ChargeLimit';
import { ChargeMode } from './properties/ChargeMode';
import { ChargePortState } from './properties/ChargePortState';
import { ChargerVoltage } from './properties/ChargerVoltage';
import { ChargingRate } from './properties/ChargingRate';
import { ChargingWindowChosen } from './properties/ChargingWindowChosen';
import { CurrentType } from './properties/CurrentType';
import { DepartureTimes } from './properties/DepartureTimes';
import { EstimatedRange } from './properties/EstimatedRange';
import { MaxChargingCurrent } from './properties/MaxChargingCurrent';
import { MaxRange } from './properties/MaxRange';
import { PluggedIn } from './properties/PluggedIn';
import { PlugType } from './properties/PlugType';
import { PreconditioningDepartureEnabled } from './properties/PreconditioningDepartureEnabled';
import { PreconditioningDepartureStatus } from './properties/PreconditioningDepartureStatus';
import { PreconditioningError } from './properties/PreconditioningError';
import { PreconditioningImmediateStatus } from './properties/PreconditioningImmediateStatus';
import { ReductionTimes } from './properties/ReductionTimes';
import { SmartChargingStatus } from './properties/SmartChargingStatus';
import { StarterBatteryState } from './properties/StarterBatteryState';
import { Status } from './properties/Status';
import { Timers } from './properties/Timers';
import { TimeToCompleteCharge } from './properties/TimeToCompleteCharge';

enum Properties {
  BatteryCapacity = 'battery_capacity',
  BatteryCurrent = 'battery_current',
  BatteryLevel = 'battery_level',
  BatteryLevelAtDeparture = 'battery_level_at_departure',
  BatteryTemperature = 'battery_temperature',
  ChargeLimit = 'charge_limit',
  ChargeMode = 'charge_mode',
  ChargePortState = 'charge_port_state',
  ChargerVoltage = 'charger_voltage',
  ChargingRate = 'charging_rate',
  ChargingWindowChosen = 'charging_window_chosen',
  CurrentType = 'current_type',
  DepartureTimes = 'departure_times',
  EstimatedRange = 'estimated_range',
  MaxChargingCurrent = 'max_charging_current',
  MaxRange = 'max_range',
  PlugType = 'plug_type',
  PluggedIn = 'plugged_in',
  PreconditioningDepartureEnabled = 'preconditioning_departure_enabled',
  PreconditioningDepartureStatus = 'preconditioning_departure_status',
  PreconditioningError = 'preconditioning_error',
  PreconditioningImmediateStatus = 'preconditioning_immediate_status',
  ReductionTimes = 'reduction_times',
  SmartChargingStatus = 'smart_charging_status',
  StarterBatteryState = 'starter_battery_state',
  Status = 'status',
  TimeToCompleteCharge = 'time_to_complete_charge',
  Timers = 'timers',
}

const ChargingDescriptor = {
  category: 'chassis',
  identifier: [0, 35],
  name: 'charging',
  prettyName: 'Charging',
  properties: {
    battery_capacity: BatteryCapacity,
    battery_current: BatteryCurrent,
    battery_level: BatteryLevel,
    battery_level_at_departure: BatteryLevelAtDeparture,
    battery_temperature: BatteryTemperature,
    charge_limit: ChargeLimit,
    charge_mode: ChargeMode,
    charge_port_state: ChargePortState,
    charger_voltage: ChargerVoltage,
    charging_rate: ChargingRate,
    charging_window_chosen: ChargingWindowChosen,
    current_type: CurrentType,
    departure_times: DepartureTimes,
    estimated_range: EstimatedRange,
    max_charging_current: MaxChargingCurrent,
    max_range: MaxRange,
    plug_type: PlugType,
    plugged_in: PluggedIn,
    preconditioning_departure_enabled: PreconditioningDepartureEnabled,
    preconditioning_departure_status: PreconditioningDepartureStatus,
    preconditioning_error: PreconditioningError,
    preconditioning_immediate_status: PreconditioningImmediateStatus,
    reduction_times: ReductionTimes,
    smart_charging_status: SmartChargingStatus,
    starter_battery_state: StarterBatteryState,
    status: Status,
    time_to_complete_charge: TimeToCompleteCharge,
    timers: Timers,
  },
  state: [
    BatteryCapacity,
    BatteryCurrent,
    BatteryLevel,
    BatteryLevelAtDeparture,
    BatteryTemperature,
    ChargeLimit,
    ChargeMode,
    ChargePortState,
    ChargerVoltage,
    ChargingRate,
    ChargingWindowChosen,
    CurrentType,
    DepartureTimes,
    EstimatedRange,
    MaxChargingCurrent,
    MaxRange,
    PlugType,
    PluggedIn,
    PreconditioningDepartureEnabled,
    PreconditioningDepartureStatus,
    PreconditioningError,
    PreconditioningImmediateStatus,
    ReductionTimes,
    SmartChargingStatus,
    StarterBatteryState,
    Status,
    TimeToCompleteCharge,
    Timers,
  ],
};

@Descriptor(ChargingDescriptor)
export class Charging extends Capability<typeof ChargingDescriptor.properties> {
  public static Name = ChargingDescriptor.name;
  public static Properties = Properties;
}
