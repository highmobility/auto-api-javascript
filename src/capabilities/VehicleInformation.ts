import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  BuildDate = 'build_date',
  ColourName = 'colour_name',
  CountryCode = 'country_code',
  DataQuality = 'data_quality',
  DisplayUnit = 'display_unit',
  Drive = 'drive',
  DriverSeatLocation = 'driver_seat_location',
  EngineMaxTorque = 'engine_max_torque',
  EngineVolume = 'engine_volume',
  Equipments = 'equipments',
  ExtraEquipmentCodes = 'extra_equipment_codes',
  FuelTankCapacity = 'fuel_tank_capacity',
  Gearbox = 'gearbox',
  Language = 'language',
  LastDataTransferDate = 'last_data_transfer_date',
  LicensePlate = 'license_plate',
  ModelKey = 'model_key',
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
  Series = 'series',
  TimeZone = 'time_zone',
  Timeformat = 'timeformat',
  VehicleMass = 'vehicle_mass',
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
