import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AutomaticTeleserviceCallDate = 'automatic_teleservice_call_date',
  BrakeFluidChangeDate = 'brake_fluid_change_date',
  CbsReportsCount = 'cbs_reports_count',
  ConditionBasedServices = 'condition_based_services',
  DaysToNextService = 'days_to_next_service',
  DistanceToNextOilService = 'distance_to_next_oil_service',
  DistanceToNextService = 'distance_to_next_service',
  KilometersToNextService = 'kilometers_to_next_service',
  LastEcall = 'last_ecall',
  MonthsToExhaustInspection = 'months_to_exhaust_inspection',
  NextInspectionDate = 'next_inspection_date',
  ServiceDistanceThreshold = 'service_distance_threshold',
  ServiceTimeThreshold = 'service_time_threshold',
  TeleserviceAvailability = 'teleservice_availability',
  TeleserviceBatteryCallDate = 'teleservice_battery_call_date',
  TimeToExhaustInspection = 'time_to_exhaust_inspection',
  TimeToNextOilService = 'time_to_next_oil_service',
  TimeToNextService = 'time_to_next_service',
}

export class Maintenance extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 52,
  };
  static readonly Name = 'maintenance';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Maintenance.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
