import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class NameString extends String {}

@Descriptor({
  id: 4,
  name: 'name',
  value: NameString,
})
export class Name extends Property<typeof NameString> {}
