import { Descriptor } from '../../decorators';
import { Enum } from '../../values/base/Enum';
import { Property } from '../../core/Property';

const BrandEnumDescriptor = {
  values: {
    abarth: 1,
    alfaromeo: 2,
    alpine: 3,
    audi: 4,
    bmw: 5,
    cadillac: 6,
    chevrolet: 7,
    chrysler: 8,
    citroen: 9,
    cupra: 10,
    dacia: 11,
    dodge: 12,
    ds: 13,
    emulator: 42,
    fiat: 14,
    ford: 15,
    honda: 16,
    hyundai: 17,
    iveco: 18,
    jaguar: 19,
    jeep: 20,
    kia: 21,
    lancia: 22,
    land_rover: 23,
    lexus: 24,
    man: 25,
    mazda: 26,
    mercedes_benz: 27,
    mini: 28,
    mitsubishi: 29,
    nissan: 30,
    opel: 31,
    peugeot: 32,
    porsche: 33,
    renault: 34,
    seat: 35,
    skoda: 36,
    smart: 37,
    subaru: 38,
    toyota: 39,
    unknown: 0,
    volkswagen: 40,
    volvo_cars: 41,
  },
  size: 1,
};

@Descriptor(BrandEnumDescriptor)
export class BrandEnum extends Enum<keyof typeof BrandEnumDescriptor.values> {}

@Descriptor({
  id: 164,
  name: 'brand',
  value: BrandEnum,
})
export class Brand extends Property<typeof BrandEnum> {}
