import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class EndAddressString extends String {}

@Descriptor({
  id: 7,
  name: 'end_address',
  value: EndAddressString,
})
export class EndAddress extends Property<typeof EndAddressString> {}
