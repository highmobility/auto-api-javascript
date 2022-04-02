import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class OperatorNameString extends String {}

@Descriptor({
  id: 2,
  name: 'operator_name',
  value: OperatorNameString,
})
export class OperatorName extends Property<typeof OperatorNameString> {}
