import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AccelerationDurations = 'acceleration_durations',
  AccelerationEvaluation = 'acceleration_evaluation',
  AverageFuelConsumption = 'average_fuel_consumption',
  AverageSpeed = 'average_speed',
  AverageSpeedLastTrip = 'average_speed_last_trip',
  AverageSpeedSinceReset = 'average_speed_since_reset',
  AverageWeeklyDistance = 'average_weekly_distance',
  AverageWeeklyDistanceLongRun = 'average_weekly_distance_long_run',
  BrakingEvaluation = 'braking_evaluation',
  CurrentFuelConsumption = 'current_fuel_consumption',
  DistanceOverTime = 'distance_over_time',
  DrivingDurationLastTrip = 'driving_duration_last_trip',
  DrivingDurationSinceReset = 'driving_duration_since_reset',
  DrivingModesActivationPeriods = 'driving_modes_activation_periods',
  DrivingModesEnergyConsumptions = 'driving_modes_energy_consumptions',
  DrivingStyleEvaluation = 'driving_style_evaluation',
  EcoScoreBonusRange = 'eco_score_bonus_range',
  EcoScoreConstant = 'eco_score_constant',
  EcoScoreFreeWheel = 'eco_score_free_wheel',
  EcoScoreTotal = 'eco_score_total',
  ElectricConsumptionAverage = 'electric_consumption_average',
  ElectricConsumptionRateSinceReset = 'electric_consumption_rate_since_reset',
  ElectricConsumptionRateSinceStart = 'electric_consumption_rate_since_start',
  ElectricDistanceLastTrip = 'electric_distance_last_trip',
  ElectricDistanceSinceReset = 'electric_distance_since_reset',
  ElectricDurationLastTrip = 'electric_duration_last_trip',
  ElectricDurationSinceReset = 'electric_duration_since_reset',
  FuelConsumptionRateLastTrip = 'fuel_consumption_rate_last_trip',
  FuelConsumptionRateSinceReset = 'fuel_consumption_rate_since_reset',
  FuelDistanceLastTrip = 'fuel_distance_last_trip',
  FuelDistanceSinceReset = 'fuel_distance_since_reset',
  LastTripAverageEnergyRecuperation = 'last_trip_average_energy_recuperation',
  LastTripBatteryRegenerated = 'last_trip_battery_regenerated',
  LastTripBatteryRemaining = 'last_trip_battery_remaining',
  LastTripDate = 'last_trip_date',
  LastTripElectricPortion = 'last_trip_electric_portion',
  LastTripEnergyConsumption = 'last_trip_energy_consumption',
  LastTripFuelConsumption = 'last_trip_fuel_consumption',
  LateNightGrade = 'late_night_grade',
  MileageAfterLastTrip = 'mileage_after_last_trip',
  OdometerAfterLastTrip = 'odometer_after_last_trip',
  RapidAccelerationGrade = 'rapid_acceleration_grade',
  RapidDecelerationGrade = 'rapid_deceleration_grade',
  RecuperationPower = 'recuperation_power',
  SafetyDrivingScore = 'safety_driving_score',
  TripMeters = 'trip_meters',
}

export class Usage extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 104,
  };
  static readonly Name = 'usage';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Usage.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
