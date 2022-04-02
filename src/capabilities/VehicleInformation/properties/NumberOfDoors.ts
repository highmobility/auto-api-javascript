import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class NumberOfDoorsUInteger extends UInteger {}

@Descriptor({
  id: 10,
  name: 'number_of_doors',
  value: NumberOfDoorsUInteger,
})
export class NumberOfDoors extends Property<typeof NumberOfDoorsUInteger> {}
