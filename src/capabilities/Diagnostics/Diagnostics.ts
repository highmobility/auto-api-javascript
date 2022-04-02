import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AdblueLevel } from './properties/AdblueLevel';
import { AntiLockBraking } from './properties/AntiLockBraking';
import { BackupBatteryRemainingTime } from './properties/BackupBatteryRemainingTime';
import { BatteryLevel } from './properties/BatteryLevel';
import { BatteryVoltage } from './properties/BatteryVoltage';
import { BrakeFluidLevel } from './properties/BrakeFluidLevel';
import { BrakeLiningWearPreWarning } from './properties/BrakeLiningWearPreWarning';
import { CheckControlMessages } from './properties/CheckControlMessages';
import { ConfirmedTroubleCodes } from './properties/ConfirmedTroubleCodes';
import { DieselExhaustFilterStatus } from './properties/DieselExhaustFilterStatus';
import { DieselExhaustFluidRange } from './properties/DieselExhaustFluidRange';
import { DieselParticulateFilterSootLevel } from './properties/DieselParticulateFilterSootLevel';
import { DistanceSinceReset } from './properties/DistanceSinceReset';
import { DistanceSinceStart } from './properties/DistanceSinceStart';
import { EngineCoolantFluidLevel } from './properties/EngineCoolantFluidLevel';
import { EngineCoolantTemperature } from './properties/EngineCoolantTemperature';
import { EngineLoad } from './properties/EngineLoad';
import { EngineOilAmount } from './properties/EngineOilAmount';
import { EngineOilFluidLevel } from './properties/EngineOilFluidLevel';
import { EngineOilLevel } from './properties/EngineOilLevel';
import { EngineOilLifeRemaining } from './properties/EngineOilLifeRemaining';
import { EngineOilPressureLevel } from './properties/EngineOilPressureLevel';
import { EngineOilTemperature } from './properties/EngineOilTemperature';
import { EngineRpm } from './properties/EngineRpm';
import { EngineTimeToNextService } from './properties/EngineTimeToNextService';
import { EngineTorque } from './properties/EngineTorque';
import { EngineTotalFuelConsumption } from './properties/EngineTotalFuelConsumption';
import { EngineTotalIdleOperatingTime } from './properties/EngineTotalIdleOperatingTime';
import { EngineTotalOperatingTime } from './properties/EngineTotalOperatingTime';
import { EstimatedRange } from './properties/EstimatedRange';
import { EstimatedSecondaryPowertrainRange } from './properties/EstimatedSecondaryPowertrainRange';
import { FuelLevel } from './properties/FuelLevel';
import { FuelLevelAccuracy } from './properties/FuelLevelAccuracy';
import { FuelVolume } from './properties/FuelVolume';
import { LowVoltageBatteryChargeLevel } from './properties/LowVoltageBatteryChargeLevel';
import { Odometer } from './properties/Odometer';
import { OemTroubleCodeValues } from './properties/OemTroubleCodeValues';
import { Speed } from './properties/Speed';
import { TirePressures } from './properties/TirePressures';
import { TirePressuresDifferences } from './properties/TirePressuresDifferences';
import { TirePressuresTargets } from './properties/TirePressuresTargets';
import { TirePressureStatuses } from './properties/TirePressureStatuses';
import { TireTemperatures } from './properties/TireTemperatures';
import { TroubleCodes } from './properties/TroubleCodes';
import { WasherFluidLevel } from './properties/WasherFluidLevel';
import { WheelBasedSpeed } from './properties/WheelBasedSpeed';
import { WheelRpms } from './properties/WheelRpms';

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
  EngineTotalOperatingTime = 'engine_total_operating_time',
  EstimatedRange = 'estimated_range',
  EstimatedSecondaryPowertrainRange = 'estimated_secondary_powertrain_range',
  FuelLevel = 'fuel_level',
  FuelLevelAccuracy = 'fuel_level_accuracy',
  FuelVolume = 'fuel_volume',
  LowVoltageBatteryChargeLevel = 'low_voltage_battery_charge_level',
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

const DiagnosticsDescriptor = {
  category: 'diagnostics',
  identifier: [0, 51],
  name: 'diagnostics',
  prettyName: 'Diagnostics',
  properties: {
    adblue_level: AdblueLevel,
    anti_lock_braking: AntiLockBraking,
    backup_battery_remaining_time: BackupBatteryRemainingTime,
    battery_level: BatteryLevel,
    battery_voltage: BatteryVoltage,
    brake_fluid_level: BrakeFluidLevel,
    brake_lining_wear_pre_warning: BrakeLiningWearPreWarning,
    check_control_messages: CheckControlMessages,
    confirmed_trouble_codes: ConfirmedTroubleCodes,
    diesel_exhaust_filter_status: DieselExhaustFilterStatus,
    diesel_exhaust_fluid_range: DieselExhaustFluidRange,
    diesel_particulate_filter_soot_level: DieselParticulateFilterSootLevel,
    distance_since_reset: DistanceSinceReset,
    distance_since_start: DistanceSinceStart,
    engine_coolant_fluid_level: EngineCoolantFluidLevel,
    engine_coolant_temperature: EngineCoolantTemperature,
    engine_load: EngineLoad,
    engine_oil_amount: EngineOilAmount,
    engine_oil_fluid_level: EngineOilFluidLevel,
    engine_oil_level: EngineOilLevel,
    engine_oil_life_remaining: EngineOilLifeRemaining,
    engine_oil_pressure_level: EngineOilPressureLevel,
    engine_oil_temperature: EngineOilTemperature,
    engine_rpm: EngineRpm,
    engine_time_to_next_service: EngineTimeToNextService,
    engine_torque: EngineTorque,
    engine_total_fuel_consumption: EngineTotalFuelConsumption,
    engine_total_idle_operating_time: EngineTotalIdleOperatingTime,
    engine_total_operating_time: EngineTotalOperatingTime,
    estimated_range: EstimatedRange,
    estimated_secondary_powertrain_range: EstimatedSecondaryPowertrainRange,
    fuel_level: FuelLevel,
    fuel_level_accuracy: FuelLevelAccuracy,
    fuel_volume: FuelVolume,
    low_voltage_battery_charge_level: LowVoltageBatteryChargeLevel,
    odometer: Odometer,
    oem_trouble_code_values: OemTroubleCodeValues,
    speed: Speed,
    tire_pressure_statuses: TirePressureStatuses,
    tire_pressures: TirePressures,
    tire_pressures_differences: TirePressuresDifferences,
    tire_pressures_targets: TirePressuresTargets,
    tire_temperatures: TireTemperatures,
    trouble_codes: TroubleCodes,
    washer_fluid_level: WasherFluidLevel,
    wheel_based_speed: WheelBasedSpeed,
    wheel_rpms: WheelRpms,
  },
  state: [
    AdblueLevel,
    AntiLockBraking,
    BackupBatteryRemainingTime,
    BatteryLevel,
    BatteryVoltage,
    BrakeFluidLevel,
    BrakeLiningWearPreWarning,
    CheckControlMessages,
    ConfirmedTroubleCodes,
    DieselExhaustFilterStatus,
    DieselExhaustFluidRange,
    DieselParticulateFilterSootLevel,
    DistanceSinceReset,
    DistanceSinceStart,
    EngineCoolantFluidLevel,
    EngineCoolantTemperature,
    EngineLoad,
    EngineOilAmount,
    EngineOilFluidLevel,
    EngineOilLevel,
    EngineOilLifeRemaining,
    EngineOilPressureLevel,
    EngineOilTemperature,
    EngineRpm,
    EngineTimeToNextService,
    EngineTorque,
    EngineTotalFuelConsumption,
    EngineTotalIdleOperatingTime,
    EngineTotalOperatingTime,
    EstimatedRange,
    EstimatedSecondaryPowertrainRange,
    FuelLevel,
    FuelLevelAccuracy,
    FuelVolume,
    LowVoltageBatteryChargeLevel,
    Odometer,
    OemTroubleCodeValues,
    Speed,
    TirePressureStatuses,
    TirePressures,
    TirePressuresDifferences,
    TirePressuresTargets,
    TireTemperatures,
    TroubleCodes,
    WasherFluidLevel,
    WheelBasedSpeed,
    WheelRpms,
  ],
};

@Descriptor(DiagnosticsDescriptor)
export class Diagnostics extends Capability<typeof DiagnosticsDescriptor.properties> {
  public static Name = DiagnosticsDescriptor.name;
  public static Properties = Properties;
}
