import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class HandleString extends String {}

@Descriptor({
  id: 2,
  name: 'handle',
  value: HandleString,
})
export class Handle extends Property<typeof HandleString> {}
