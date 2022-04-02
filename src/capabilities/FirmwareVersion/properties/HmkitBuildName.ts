import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class HmkitBuildNameString extends String {}

@Descriptor({
  id: 2,
  name: 'hmkit_build_name',
  value: HmkitBuildNameString,
})
export class HmkitBuildName extends Property<typeof HmkitBuildNameString> {}
