import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class SeverityUInteger extends UInteger {}

@Descriptor({
  id: 5,
  name: 'severity',
  value: SeverityUInteger,
})
export class Severity extends Property<typeof SeverityUInteger> {}
