import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AutomaticTeleserviceCallDate } from './properties/AutomaticTeleserviceCallDate';
import { BrakeFluidChangeDate } from './properties/BrakeFluidChangeDate';
import { CbsReportsCount } from './properties/CbsReportsCount';
import { ConditionBasedServices } from './properties/ConditionBasedServices';
import { DistanceToNextOilService } from './properties/DistanceToNextOilService';
import { DistanceToNextService } from './properties/DistanceToNextService';
import { LastEcall } from './properties/LastEcall';
import { NextInspectionDate } from './properties/NextInspectionDate';
import { ServiceDistanceThreshold } from './properties/ServiceDistanceThreshold';
import { ServiceTimeThreshold } from './properties/ServiceTimeThreshold';
import { TeleserviceAvailability } from './properties/TeleserviceAvailability';
import { TeleserviceBatteryCallDate } from './properties/TeleserviceBatteryCallDate';
import { TimeToExhaustInspection } from './properties/TimeToExhaustInspection';
import { TimeToNextOilService } from './properties/TimeToNextOilService';
import { TimeToNextService } from './properties/TimeToNextService';

enum Properties {
  AutomaticTeleserviceCallDate = 'automatic_teleservice_call_date',
  BrakeFluidChangeDate = 'brake_fluid_change_date',
  CbsReportsCount = 'cbs_reports_count',
  ConditionBasedServices = 'condition_based_services',
  DistanceToNextOilService = 'distance_to_next_oil_service',
  DistanceToNextService = 'distance_to_next_service',
  LastEcall = 'last_ecall',
  NextInspectionDate = 'next_inspection_date',
  ServiceDistanceThreshold = 'service_distance_threshold',
  ServiceTimeThreshold = 'service_time_threshold',
  TeleserviceAvailability = 'teleservice_availability',
  TeleserviceBatteryCallDate = 'teleservice_battery_call_date',
  TimeToExhaustInspection = 'time_to_exhaust_inspection',
  TimeToNextOilService = 'time_to_next_oil_service',
  TimeToNextService = 'time_to_next_service',
}

const MaintenanceDescriptor = {
  category: 'diagnostics',
  identifier: [0, 52],
  name: 'maintenance',
  prettyName: 'Maintenance',
  properties: {
    automatic_teleservice_call_date: AutomaticTeleserviceCallDate,
    brake_fluid_change_date: BrakeFluidChangeDate,
    cbs_reports_count: CbsReportsCount,
    condition_based_services: ConditionBasedServices,
    distance_to_next_oil_service: DistanceToNextOilService,
    distance_to_next_service: DistanceToNextService,
    last_ecall: LastEcall,
    next_inspection_date: NextInspectionDate,
    service_distance_threshold: ServiceDistanceThreshold,
    service_time_threshold: ServiceTimeThreshold,
    teleservice_availability: TeleserviceAvailability,
    teleservice_battery_call_date: TeleserviceBatteryCallDate,
    time_to_exhaust_inspection: TimeToExhaustInspection,
    time_to_next_oil_service: TimeToNextOilService,
    time_to_next_service: TimeToNextService,
  },
  state: [
    AutomaticTeleserviceCallDate,
    BrakeFluidChangeDate,
    CbsReportsCount,
    ConditionBasedServices,
    DistanceToNextOilService,
    DistanceToNextService,
    LastEcall,
    NextInspectionDate,
    ServiceDistanceThreshold,
    ServiceTimeThreshold,
    TeleserviceAvailability,
    TeleserviceBatteryCallDate,
    TimeToExhaustInspection,
    TimeToNextOilService,
    TimeToNextService,
  ],
};

@Descriptor(MaintenanceDescriptor)
export class Maintenance extends Capability<typeof MaintenanceDescriptor.properties> {
  public static Name = MaintenanceDescriptor.name;
  public static Properties = Properties;
}
