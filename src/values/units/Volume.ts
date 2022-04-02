import { Descriptor } from '../../decorators';
import { UnitType } from '../base/UnitType';

const VolumeDescriptor = {
  size: 10,
  units: {
    liters: 2,
    milliliters: 3,
    centiliters: 4,
    deciliters: 5,
    cubic_millimeters: 10,
    cubic_centimeters: 9,
    cubic_decimeters: 8,
    cubic_meters: 7,
    cubic_inches: 11,
    cubic_feet: 12,
    fluid_ounces: 19,
    gallons: 23,
    imperial_fluid_ounces: 26,
    imperial_gallons: 29,
  },
};

@Descriptor(VolumeDescriptor)
export class Volume extends UnitType<keyof typeof VolumeDescriptor.units> {}
