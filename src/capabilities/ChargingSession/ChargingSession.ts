import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { BusinessErrors } from './properties/BusinessErrors';
import { CalculatedEnergyCharged } from './properties/CalculatedEnergyCharged';
import { ChargingCost } from './properties/ChargingCost';
import { DisplayedStartStateOfCharge } from './properties/DisplayedStartStateOfCharge';
import { DisplayedStateOfCharge } from './properties/DisplayedStateOfCharge';
import { EndTime } from './properties/EndTime';
import { EnergyCharged } from './properties/EnergyCharged';
import { Location } from './properties/Location';
import { Odometer } from './properties/Odometer';
import { PreconditioningState } from './properties/PreconditioningState';
import { PublicChargingPoints } from './properties/PublicChargingPoints';
import { StartTime } from './properties/StartTime';
import { TimeZone } from './properties/TimeZone';
import { TotalChargingDuration } from './properties/TotalChargingDuration';

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

const ChargingSessionDescriptor = {
  category: 'chassis',
  identifier: [0, 109],
  name: 'charging_session',
  prettyName: 'Charging session',
  properties: {
    business_errors: BusinessErrors,
    calculated_energy_charged: CalculatedEnergyCharged,
    charging_cost: ChargingCost,
    displayed_start_state_of_charge: DisplayedStartStateOfCharge,
    displayed_state_of_charge: DisplayedStateOfCharge,
    end_time: EndTime,
    energy_charged: EnergyCharged,
    location: Location,
    odometer: Odometer,
    preconditioning_state: PreconditioningState,
    public_charging_points: PublicChargingPoints,
    start_time: StartTime,
    time_zone: TimeZone,
    total_charging_duration: TotalChargingDuration,
  },
  state: [
    BusinessErrors,
    CalculatedEnergyCharged,
    ChargingCost,
    DisplayedStartStateOfCharge,
    DisplayedStateOfCharge,
    EndTime,
    EnergyCharged,
    Location,
    Odometer,
    PreconditioningState,
    PublicChargingPoints,
    StartTime,
    TimeZone,
    TotalChargingDuration,
  ],
};

@Descriptor(ChargingSessionDescriptor)
export class ChargingSession extends Capability<typeof ChargingSessionDescriptor.properties> {
  public static Name = ChargingSessionDescriptor.name;
  public static Properties = Properties;
}
