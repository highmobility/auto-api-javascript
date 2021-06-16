import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AdblueLevel = 'adblue_level',
  AntiLockBraking = 'anti_lock_braking',
  BackupBatteryRemainingTime = 'backup_battery_remaining_time',
  BatteryLevel = 'battery_level',
  BatteryVoltage = 'battery_voltage',
  BrakeFluidLevel = 'brake_fluid_level',
  BrakeLiningWearPreWarning = 'brake_lining_wear_pre_warning',
  CheckControlMessages = 'check_control_messages',
  ConfirmedTroubleCodes = 'confirmed_trouble_codes',
  DieselExhaustFilterStatus = 'diesel_exhaust_filter_status',
  DieselExhaustFluidRange = 'diesel_exhaust_fluid_range',
  DieselParticulateFilterSootLevel = 'diesel_particulate_filter_soot_level',
  DistanceSinceReset = 'distance_since_reset',
  DistanceSinceStart = 'distance_since_start',
  EngineCoolantFluidLevel = 'engine_coolant_fluid_level',
  EngineCoolantTemperature = 'engine_coolant_temperature',
  EngineLoad = 'engine_load',
  EngineOilAmount = 'engine_oil_amount',
  EngineOilFluidLevel = 'engine_oil_fluid_level',
  EngineOilLevel = 'engine_oil_level',
  EngineOilLifeRemaining = 'engine_oil_life_remaining',
  EngineOilPressureLevel = 'engine_oil_pressure_level',
  EngineOilTemperature = 'engine_oil_temperature',
  EngineRpm = 'engine_rpm',
  EngineTimeToNextService = 'engine_time_to_next_service',
  EngineTorque = 'engine_torque',
  EngineTotalFuelConsumption = 'engine_total_fuel_consumption',
  EngineTotalIdleOperatingTime = 'engine_total_idle_operating_time',
  EngineTotalOperatingHours = 'engine_total_operating_hours',
  EngineTotalOperatingTime = 'engine_total_operating_time',
  EstimatedRange = 'estimated_range',
  EstimatedSecondaryPowertrainRange = 'estimated_secondary_powertrain_range',
  FuelLevel = 'fuel_level',
  FuelLevelAccuracy = 'fuel_level_accuracy',
  FuelVolume = 'fuel_volume',
  LowVoltageBatteryChargeLevel = 'low_voltage_battery_charge_level',
  Mileage = 'mileage',
  MileageMeters = 'mileage_meters',
  Odometer = 'odometer',
  OemTroubleCodeValues = 'oem_trouble_code_values',
  Speed = 'speed',
  TirePressureStatuses = 'tire_pressure_statuses',
  TirePressures = 'tire_pressures',
  TirePressuresDifferences = 'tire_pressures_differences',
  TirePressuresTargets = 'tire_pressures_targets',
  TireTemperatures = 'tire_temperatures',
  TroubleCodes = 'trouble_codes',
  WasherFluidLevel = 'washer_fluid_level',
  WheelBasedSpeed = 'wheel_based_speed',
  WheelRpms = 'wheel_rpms',
}

export class Diagnostics extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 51,
  };
  static readonly Name = 'diagnostics';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Diagnostics.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
