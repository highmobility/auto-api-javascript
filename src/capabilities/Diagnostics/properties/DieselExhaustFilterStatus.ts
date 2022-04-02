import { Descriptor } from '../../../decorators';
import { DieselExhaustFilterStatus as DieselExhaustFilterStatusCustomType } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 40,
  multiple: true,
  name: 'diesel_exhaust_filter_status',
  value: DieselExhaustFilterStatusCustomType,
})
export class DieselExhaustFilterStatus extends Property<
  typeof DieselExhaustFilterStatusCustomType
> {}
