import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class SalesDesignationString extends String {}

@Descriptor({
  id: 6,
  name: 'sales_designation',
  value: SalesDesignationString,
})
export class SalesDesignation extends Property<typeof SalesDesignationString> {}
