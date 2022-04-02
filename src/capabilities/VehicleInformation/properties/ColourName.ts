import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class ColourNameString extends String {}

@Descriptor({
  id: 8,
  name: 'colour_name',
  value: ColourNameString,
})
export class ColourName extends Property<typeof ColourNameString> {}
