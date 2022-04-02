import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class ApplicationVersionString extends String {}

@Descriptor({
  id: 3,
  name: 'application_version',
  value: ApplicationVersionString,
})
export class ApplicationVersion extends Property<typeof ApplicationVersionString> {}
