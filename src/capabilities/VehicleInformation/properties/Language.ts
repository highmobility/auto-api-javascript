import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class LanguageString extends String {}

@Descriptor({
  id: 20,
  name: 'language',
  value: LanguageString,
})
export class Language extends Property<typeof LanguageString> {}
