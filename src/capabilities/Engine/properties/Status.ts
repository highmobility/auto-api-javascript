import { Descriptor } from '../../../decorators';
import { OnOffState } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  name: 'status',
  value: OnOffState,
})
export class Status extends Property<typeof OnOffState> {}
