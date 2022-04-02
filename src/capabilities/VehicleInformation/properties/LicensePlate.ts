import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class LicensePlateString extends String {}

@Descriptor({
  id: 5,
  name: 'license_plate',
  value: LicensePlateString,
})
export class LicensePlate extends Property<typeof LicensePlateString> {}
