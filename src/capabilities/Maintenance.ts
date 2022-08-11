import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AutomaticTeleserviceCallDate = 'automatic_teleservice_call_date',
  BrakeFluidChangeDate = 'brake_fluid_change_date',
  BrakeFluidRemainingDistance = 'brake_fluid_remaining_distance',
  BrakeFluidStatus = 'brake_fluid_status',
  BrakesServiceDueDates = 'brakes_service_due_dates',
  BrakesServiceRemainingDistances = 'brakes_service_remaining_distances',
  BrakesServiceStatuses = 'brakes_service_statuses',
  CbsReportsCount = 'cbs_reports_count',
  ConditionBasedServices = 'condition_based_services',
  DaysToNextService = 'days_to_next_service',
  DistanceToNextOilService = 'distance_to_next_oil_service',
  DistanceToNextService = 'distance_to_next_service',
  DriveInInspectionDate = 'drive_in_inspection_date',
  DriveInInspectionDistanceTo = 'drive_in_inspection_distance_to',
  DriveInInspectionStatus = 'drive_in_inspection_status',
  InspectionStatus = 'inspection_status',
  KilometersToNextService = 'kilometers_to_next_service',
  LastEcall = 'last_ecall',
  LegalInspectionDate = 'legal_inspection_date',
  MonthsToExhaustInspection = 'months_to_exhaust_inspection',
  NextInspectionDate = 'next_inspection_date',
  NextInspectionDistanceTo = 'next_inspection_distance_to',
  NextOilServiceDate = 'next_oil_service_date',
  ServiceDate = 'service_date',
  ServiceDistanceThreshold = 'service_distance_threshold',
  ServiceStatus = 'service_status',
  ServiceTimeThreshold = 'service_time_threshold',
  TeleserviceAvailability = 'teleservice_availability',
  TeleserviceBatteryCallDate = 'teleservice_battery_call_date',
  TimeToExhaustInspection = 'time_to_exhaust_inspection',
  TimeToNextOilService = 'time_to_next_oil_service',
  TimeToNextService = 'time_to_next_service',
  VehicleCheckDate = 'vehicle_check_date',
  VehicleCheckDistanceTo = 'vehicle_check_distance_to',
  VehicleCheckStatus = 'vehicle_check_status',
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
