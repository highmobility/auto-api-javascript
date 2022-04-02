import { ConditionBasedService } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 11,
  multiple: true,
  name: 'condition_based_services',
  value: ConditionBasedService,
})
export class ConditionBasedServices extends Property<typeof ConditionBasedService> {}
