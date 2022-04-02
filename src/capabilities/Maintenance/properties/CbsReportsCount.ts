import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { UInteger } from '../../../values/base/UInteger';

@Size(1)
export class CbsReportsCountUInteger extends UInteger {}

@Descriptor({
  id: 3,
  name: 'cbs_reports_count',
  value: CbsReportsCountUInteger,
})
export class CbsReportsCount extends Property<typeof CbsReportsCountUInteger> {}
