import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class ActivatedActionUInteger extends UInteger {}

@Descriptor({
  id: 3,
  name: 'activated_action',
  value: ActivatedActionUInteger,
})
export class ActivatedAction extends Property<typeof ActivatedActionUInteger> {}
