import { Descriptor } from '../../decorators';
import { Property } from '../../core/Property';
import { String } from '../../values/base/String';

export class VinString extends String {}

@Descriptor({
  id: 163,
  name: 'vin',
  value: VinString,
})
export class Vin extends Property<typeof VinString> {}
