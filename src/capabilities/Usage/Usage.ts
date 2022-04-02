import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AccelerationEvaluation } from './properties/AccelerationEvaluation';
import { AverageFuelConsumption } from './properties/AverageFuelConsumption';
import { AverageSpeedLastTrip } from './properties/AverageSpeedLastTrip';
import { AverageSpeedSinceReset } from './properties/AverageSpeedSinceReset';
import { AverageWeeklyDistance } from './properties/AverageWeeklyDistance';
import { AverageWeeklyDistanceLongRun } from './properties/AverageWeeklyDistanceLongRun';
import { CurrentFuelConsumption } from './properties/CurrentFuelConsumption';
import { DistanceOverTime } from './properties/DistanceOverTime';
import { DrivingDurationLastTrip } from './properties/DrivingDurationLastTrip';
import { DrivingDurationSinceReset } from './properties/DrivingDurationSinceReset';
import { DrivingModesActivationPeriods } from './properties/DrivingModesActivationPeriods';
import { DrivingModesEnergyConsumptions } from './properties/DrivingModesEnergyConsumptions';
import { DrivingStyleEvaluation } from './properties/DrivingStyleEvaluation';
import { EcoScoreBonusRange } from './properties/EcoScoreBonusRange';
import { EcoScoreConstant } from './properties/EcoScoreConstant';
import { EcoScoreFreeWheel } from './properties/EcoScoreFreeWheel';
import { EcoScoreTotal } from './properties/EcoScoreTotal';
import { ElectricConsumptionRateSinceReset } from './properties/ElectricConsumptionRateSinceReset';
import { ElectricConsumptionRateSinceStart } from './properties/ElectricConsumptionRateSinceStart';
import { ElectricDistanceLastTrip } from './properties/ElectricDistanceLastTrip';
import { ElectricDistanceSinceReset } from './properties/ElectricDistanceSinceReset';
import { ElectricDurationLastTrip } from './properties/ElectricDurationLastTrip';
import { ElectricDurationSinceReset } from './properties/ElectricDurationSinceReset';
import { FuelConsumptionRateLastTrip } from './properties/FuelConsumptionRateLastTrip';
import { FuelConsumptionRateSinceReset } from './properties/FuelConsumptionRateSinceReset';
import { FuelDistanceLastTrip } from './properties/FuelDistanceLastTrip';
import { FuelDistanceSinceReset } from './properties/FuelDistanceSinceReset';
import { LastTripAverageEnergyRecuperation } from './properties/LastTripAverageEnergyRecuperation';
import { LastTripBatteryRemaining } from './properties/LastTripBatteryRemaining';
import { LastTripDate } from './properties/LastTripDate';
import { LastTripElectricPortion } from './properties/LastTripElectricPortion';
import { LastTripEnergyConsumption } from './properties/LastTripEnergyConsumption';
import { LastTripFuelConsumption } from './properties/LastTripFuelConsumption';
import { LateNightGrade } from './properties/LateNightGrade';
import { OdometerAfterLastTrip } from './properties/OdometerAfterLastTrip';
import { RapidAccelerationGrade } from './properties/RapidAccelerationGrade';
import { RapidDecelerationGrade } from './properties/RapidDecelerationGrade';
import { SafetyDrivingScore } from './properties/SafetyDrivingScore';
import { TripMeters } from './properties/TripMeters';

enum Properties {
  AccelerationEvaluation = 'acceleration_evaluation',
  AverageFuelConsumption = 'average_fuel_consumption',
  AverageSpeedLastTrip = 'average_speed_last_trip',
  AverageSpeedSinceReset = 'average_speed_since_reset',
  AverageWeeklyDistance = 'average_weekly_distance',
  AverageWeeklyDistanceLongRun = 'average_weekly_distance_long_run',
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
  LastTripBatteryRemaining = 'last_trip_battery_remaining',
  LastTripDate = 'last_trip_date',
  LastTripElectricPortion = 'last_trip_electric_portion',
  LastTripEnergyConsumption = 'last_trip_energy_consumption',
  LastTripFuelConsumption = 'last_trip_fuel_consumption',
  LateNightGrade = 'late_night_grade',
  OdometerAfterLastTrip = 'odometer_after_last_trip',
  RapidAccelerationGrade = 'rapid_acceleration_grade',
  RapidDecelerationGrade = 'rapid_deceleration_grade',
  SafetyDrivingScore = 'safety_driving_score',
  TripMeters = 'trip_meters',
}

const UsageDescriptor = {
  category: 'diagnostics',
  identifier: [0, 104],
  name: 'usage',
  prettyName: 'Usage',
  properties: {
    acceleration_evaluation: AccelerationEvaluation,
    average_fuel_consumption: AverageFuelConsumption,
    average_speed_last_trip: AverageSpeedLastTrip,
    average_speed_since_reset: AverageSpeedSinceReset,
    average_weekly_distance: AverageWeeklyDistance,
    average_weekly_distance_long_run: AverageWeeklyDistanceLongRun,
    current_fuel_consumption: CurrentFuelConsumption,
    distance_over_time: DistanceOverTime,
    driving_duration_last_trip: DrivingDurationLastTrip,
    driving_duration_since_reset: DrivingDurationSinceReset,
    driving_modes_activation_periods: DrivingModesActivationPeriods,
    driving_modes_energy_consumptions: DrivingModesEnergyConsumptions,
    driving_style_evaluation: DrivingStyleEvaluation,
    eco_score_bonus_range: EcoScoreBonusRange,
    eco_score_constant: EcoScoreConstant,
    eco_score_free_wheel: EcoScoreFreeWheel,
    eco_score_total: EcoScoreTotal,
    electric_consumption_rate_since_reset: ElectricConsumptionRateSinceReset,
    electric_consumption_rate_since_start: ElectricConsumptionRateSinceStart,
    electric_distance_last_trip: ElectricDistanceLastTrip,
    electric_distance_since_reset: ElectricDistanceSinceReset,
    electric_duration_last_trip: ElectricDurationLastTrip,
    electric_duration_since_reset: ElectricDurationSinceReset,
    fuel_consumption_rate_last_trip: FuelConsumptionRateLastTrip,
    fuel_consumption_rate_since_reset: FuelConsumptionRateSinceReset,
    fuel_distance_last_trip: FuelDistanceLastTrip,
    fuel_distance_since_reset: FuelDistanceSinceReset,
    last_trip_average_energy_recuperation: LastTripAverageEnergyRecuperation,
    last_trip_battery_remaining: LastTripBatteryRemaining,
    last_trip_date: LastTripDate,
    last_trip_electric_portion: LastTripElectricPortion,
    last_trip_energy_consumption: LastTripEnergyConsumption,
    last_trip_fuel_consumption: LastTripFuelConsumption,
    late_night_grade: LateNightGrade,
    odometer_after_last_trip: OdometerAfterLastTrip,
    rapid_acceleration_grade: RapidAccelerationGrade,
    rapid_deceleration_grade: RapidDecelerationGrade,
    safety_driving_score: SafetyDrivingScore,
    trip_meters: TripMeters,
  },
  state: [
    AccelerationEvaluation,
    AverageFuelConsumption,
    AverageSpeedLastTrip,
    AverageSpeedSinceReset,
    AverageWeeklyDistance,
    AverageWeeklyDistanceLongRun,
    CurrentFuelConsumption,
    DistanceOverTime,
    DrivingDurationLastTrip,
    DrivingDurationSinceReset,
    DrivingModesActivationPeriods,
    DrivingModesEnergyConsumptions,
    DrivingStyleEvaluation,
    EcoScoreBonusRange,
    EcoScoreConstant,
    EcoScoreFreeWheel,
    EcoScoreTotal,
    ElectricConsumptionRateSinceReset,
    ElectricConsumptionRateSinceStart,
    ElectricDistanceLastTrip,
    ElectricDistanceSinceReset,
    ElectricDurationLastTrip,
    ElectricDurationSinceReset,
    FuelConsumptionRateLastTrip,
    FuelConsumptionRateSinceReset,
    FuelDistanceLastTrip,
    FuelDistanceSinceReset,
    LastTripAverageEnergyRecuperation,
    LastTripBatteryRemaining,
    LastTripDate,
    LastTripElectricPortion,
    LastTripEnergyConsumption,
    LastTripFuelConsumption,
    LateNightGrade,
    OdometerAfterLastTrip,
    RapidAccelerationGrade,
    RapidDecelerationGrade,
    SafetyDrivingScore,
    TripMeters,
  ],
};

@Descriptor(UsageDescriptor)
export class Usage extends Capability<typeof UsageDescriptor.properties> {
  public static Name = UsageDescriptor.name;
  public static Properties = Properties;
}
