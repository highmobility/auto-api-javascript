import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class DescriptionString extends String {}

@Descriptor({
  id: 3,
  name: 'description',
  value: DescriptionString,
})
export class Description extends Property<typeof DescriptionString> {}
