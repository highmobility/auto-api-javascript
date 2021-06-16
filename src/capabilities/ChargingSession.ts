import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  BusinessErrors = 'business_errors',
  CalculatedEnergyCharged = 'calculated_energy_charged',
  ChargingCost = 'charging_cost',
  DisplayedStartStateOfCharge = 'displayed_start_state_of_charge',
  DisplayedStateOfCharge = 'displayed_state_of_charge',
  EndTime = 'end_time',
  EnergyCharged = 'energy_charged',
  Location = 'location',
  Odometer = 'odometer',
  PreconditioningState = 'preconditioning_state',
  PublicChargingPoints = 'public_charging_points',
  StartTime = 'start_time',
  TimeZone = 'time_zone',
  TotalChargingDuration = 'total_charging_duration',
}

export class ChargingSession extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 109,
  };
  static readonly Name = 'charging_session';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(ChargingSession.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
