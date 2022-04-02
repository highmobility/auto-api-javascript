import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class FailureDescriptionString extends String {}

@Descriptor({
  id: 4,
  name: 'failure_description',
  value: FailureDescriptionString,
})
export class FailureDescription extends Property<typeof FailureDescriptionString> {}
