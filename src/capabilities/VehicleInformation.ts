import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ColourName = 'colour_name',
  DisplayUnit = 'display_unit',
  Drive = 'drive',
  DriverSeatLocation = 'driver_seat_location',
  EngineMaxTorque = 'engine_max_torque',
  EngineVolume = 'engine_volume',
  Equipments = 'equipments',
  Gearbox = 'gearbox',
  Language = 'language',
  LicensePlate = 'license_plate',
  ModelName = 'model_name',
  ModelYear = 'model_year',
  Name = 'name',
  NumberOfDoors = 'number_of_doors',
  NumberOfSeats = 'number_of_seats',
  Power = 'power',
  PowerInKw = 'power_in_kw',
  Powertrain = 'powertrain',
  PowertrainSecondary = 'powertrain_secondary',
  SalesDesignation = 'sales_designation',
  Timeformat = 'timeformat',
}

export class VehicleInformation extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 20,
  };
  static readonly Name = 'vehicle_information';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(VehicleInformation.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
