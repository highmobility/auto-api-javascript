import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  BatteryCapacity = 'battery_capacity',
  BatteryCurrent = 'battery_current',
  BatteryCurrentAc = 'battery_current_ac',
  BatteryCurrentDc = 'battery_current_dc',
  BatteryLevel = 'battery_level',
  BatteryLevelAtDeparture = 'battery_level_at_departure',
  BatteryTemperature = 'battery_temperature',
  ChargeLimit = 'charge_limit',
  ChargeMode = 'charge_mode',
  ChargePortState = 'charge_port_state',
  ChargerVoltage = 'charger_voltage',
  ChargerVoltageAc = 'charger_voltage_ac',
  ChargerVoltageDc = 'charger_voltage_dc',
  ChargingRate = 'charging_rate',
  ChargingRateKw = 'charging_rate_kw',
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

export class Charging extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 35,
  };
  static readonly Name = 'charging';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Charging.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
