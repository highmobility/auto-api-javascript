import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class StartAddressString extends String {}

@Descriptor({
  id: 6,
  name: 'start_address',
  value: StartAddressString,
})
export class StartAddress extends Property<typeof StartAddressString> {}
