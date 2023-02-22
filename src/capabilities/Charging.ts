import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AcousticLimit = 'acoustic_limit',
  AuxiliaryPower = 'auxiliary_power',
  BatteryCapacity = 'battery_capacity',
  BatteryChargeType = 'battery_charge_type',
  BatteryCoolingTemperature = 'battery_cooling_temperature',
  BatteryCurrent = 'battery_current',
  BatteryCurrentAc = 'battery_current_ac',
  BatteryCurrentDc = 'battery_current_dc',
  BatteryEnergy = 'battery_energy',
  BatteryEnergyChargable = 'battery_energy_chargable',
  BatteryLed = 'battery_led',
  BatteryLevel = 'battery_level',
  BatteryLevelAtDeparture = 'battery_level_at_departure',
  BatteryMaxAvailable = 'battery_max_available',
  BatteryStatus = 'battery_status',
  BatteryTemperature = 'battery_temperature',
  BatteryTemperatureControlDemand = 'battery_temperature_control_demand',
  BatteryTemperatureExtremes = 'battery_temperature_extremes',
  BatteryTempretatureExtremes = 'battery_tempretature_extremes',
  BatteryVoltage = 'battery_voltage',
  ChargeLimit = 'charge_limit',
  ChargeMode = 'charge_mode',
  ChargePortState = 'charge_port_state',
  ChargerVoltage = 'charger_voltage',
  ChargerVoltageAc = 'charger_voltage_ac',
  ChargerVoltageDc = 'charger_voltage_dc',
  ChargingCompleteLock = 'charging_complete_lock',
  ChargingCurrent = 'charging_current',
  ChargingEndReason = 'charging_end_reason',
  ChargingPhases = 'charging_phases',
  ChargingRate = 'charging_rate',
  ChargingRateKw = 'charging_rate_kw',
  ChargingSingleImmediate = 'charging_single_immediate',
  ChargingTimeDisplay = 'charging_time_display',
  ChargingWindowChosen = 'charging_window_chosen',
  CurrentLimit = 'current_limit',
  CurrentType = 'current_type',
  DepartureTimeDisplay = 'departure_time_display',
  DepartureTimes = 'departure_times',
  DistanceToCompleteCharge = 'distance_to_complete_charge',
  DrivingModePhev = 'driving_mode_phev',
  EstimatedRange = 'estimated_range',
  EstimatedRangeTarget = 'estimated_range_target',
  FlapLockStatus = 'flap_lock_status',
  FullyChargedEndTimes = 'fully_charged_end_times',
  LimitStatus = 'limit_status',
  MaxChargingCurrent = 'max_charging_current',
  MaxRange = 'max_range',
  MinChargingCurrent = 'min_charging_current',
  PlugLockStatus = 'plug_lock_status',
  PlugType = 'plug_type',
  PluggedIn = 'plugged_in',
  PreconditioningDepartureEnabled = 'preconditioning_departure_enabled',
  PreconditioningDepartureStatus = 'preconditioning_departure_status',
  PreconditioningError = 'preconditioning_error',
  PreconditioningImmediateStatus = 'preconditioning_immediate_status',
  PreconditioningRemainingTime = 'preconditioning_remaining_time',
  PreconditioningScheduledTime = 'preconditioning_scheduled_time',
  ReductionTimes = 'reduction_times',
  Restriction = 'restriction',
  SmartChargingOption = 'smart_charging_option',
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
