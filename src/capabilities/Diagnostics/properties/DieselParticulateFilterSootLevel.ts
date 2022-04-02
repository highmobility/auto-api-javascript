import { Descriptor } from '../../../decorators';
import { Percentage } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 38,
  name: 'diesel_particulate_filter_soot_level',
  value: Percentage,
})
export class DieselParticulateFilterSootLevel extends Property<typeof Percentage> {}
