import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(2)
export class ModelYearUInteger extends UInteger {}

@Descriptor({
  id: 7,
  name: 'model_year',
  value: ModelYearUInteger,
})
export class ModelYear extends Property<typeof ModelYearUInteger> {}
