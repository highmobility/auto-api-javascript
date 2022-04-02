import { Descriptor } from '../../../decorators';
import { HmkitVersion as HmkitVersionCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'hmkit_version',
  value: HmkitVersionCustomType,
})
export class HmkitVersion extends Property<typeof HmkitVersionCustomType> {}
