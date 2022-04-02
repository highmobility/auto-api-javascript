import { Bytes } from '../../values/base/Bytes';
import { Descriptor } from '../../decorators';
import { Property } from '../../core/Property';

export class NonceBytes extends Bytes {}

@Descriptor({
  id: 160,
  name: 'nonce',
  value: NonceBytes,
})
export class Nonce extends Property<typeof NonceBytes> {}
