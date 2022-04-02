import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class TextString extends String {}

@Descriptor({
  id: 1,
  name: 'text',
  value: TextString,
})
export class Text extends Property<typeof TextString> {}
