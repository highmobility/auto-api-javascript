import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { WindowOpenPercentage } from '../../../values/custom';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'open_percentages',
  value: WindowOpenPercentage,
})
export class OpenPercentages extends Property<typeof WindowOpenPercentage> {}
