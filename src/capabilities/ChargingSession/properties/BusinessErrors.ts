import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class BusinessErrorsString extends String {}

@Descriptor({
  id: 4,
  multiple: true,
  name: 'business_errors',
  value: BusinessErrorsString,
})
export class BusinessErrors extends Property<typeof BusinessErrorsString> {}
