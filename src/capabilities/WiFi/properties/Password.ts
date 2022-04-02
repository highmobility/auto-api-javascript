import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class PasswordString extends String {}

@Descriptor({
  id: 5,
  name: 'password',
  value: PasswordString,
})
export class Password extends Property<typeof PasswordString> {}
