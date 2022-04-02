import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class UrlString extends String {}

@Descriptor({
  id: 1,
  name: 'url',
  value: UrlString,
})
export class Url extends Property<typeof UrlString> {}
