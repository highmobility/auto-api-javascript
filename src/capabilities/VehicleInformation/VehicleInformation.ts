import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { ColourName } from './properties/ColourName';
import { DisplayUnit } from './properties/DisplayUnit';
import { Drive } from './properties/Drive';
import { DriverSeatLocation } from './properties/DriverSeatLocation';
import { EngineMaxTorque } from './properties/EngineMaxTorque';
import { EngineVolume } from './properties/EngineVolume';
import { Equipments } from './properties/Equipments';
import { Gearbox } from './properties/Gearbox';
import { Language } from './properties/Language';
import { LicensePlate } from './properties/LicensePlate';
import { ModelName } from './properties/ModelName';
import { ModelYear } from './properties/ModelYear';
import { Name } from './properties/Name';
import { NumberOfDoors } from './properties/NumberOfDoors';
import { NumberOfSeats } from './properties/NumberOfSeats';
import { Power } from './properties/Power';
import { Powertrain } from './properties/Powertrain';
import { PowertrainSecondary } from './properties/PowertrainSecondary';
import { SalesDesignation } from './properties/SalesDesignation';
import { Timeformat } from './properties/Timeformat';

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
  Powertrain = 'powertrain',
  PowertrainSecondary = 'powertrain_secondary',
  SalesDesignation = 'sales_designation',
  Timeformat = 'timeformat',
}

const VehicleInformationDescriptor = {
  category: 'api_structure',
  identifier: [0, 20],
  name: 'vehicle_information',
  prettyName: 'Vehicle Information',
  properties: {
    colour_name: ColourName,
    display_unit: DisplayUnit,
    drive: Drive,
    driver_seat_location: DriverSeatLocation,
    engine_max_torque: EngineMaxTorque,
    engine_volume: EngineVolume,
    equipments: Equipments,
    gearbox: Gearbox,
    language: Language,
    license_plate: LicensePlate,
    model_name: ModelName,
    model_year: ModelYear,
    name: Name,
    number_of_doors: NumberOfDoors,
    number_of_seats: NumberOfSeats,
    power: Power,
    powertrain: Powertrain,
    powertrain_secondary: PowertrainSecondary,
    sales_designation: SalesDesignation,
    timeformat: Timeformat,
  },
  state: [
    ColourName,
    DisplayUnit,
    Drive,
    DriverSeatLocation,
    EngineMaxTorque,
    EngineVolume,
    Equipments,
    Gearbox,
    Language,
    LicensePlate,
    ModelName,
    ModelYear,
    Name,
    NumberOfDoors,
    NumberOfSeats,
    Power,
    Powertrain,
    PowertrainSecondary,
    SalesDesignation,
    Timeformat,
  ],
};

@Descriptor(VehicleInformationDescriptor)
export class VehicleInformation extends Capability<typeof VehicleInformationDescriptor.properties> {
  public static Name = VehicleInformationDescriptor.name;
  public static Properties = Properties;
}
