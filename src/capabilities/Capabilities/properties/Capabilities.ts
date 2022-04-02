import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { SupportedCapability } from '../../../values/custom';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'capabilities',
  value: SupportedCapability,
})
export class Capabilities extends Property<typeof SupportedCapability> {}
