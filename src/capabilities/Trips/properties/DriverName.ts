import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class DriverNameString extends String {}

@Descriptor({
  id: 2,
  name: 'driver_name',
  value: DriverNameString,
})
export class DriverName extends Property<typeof DriverNameString> {}
