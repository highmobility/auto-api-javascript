import { Descriptor } from '../../../decorators';
import { DriverCardPresent } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 3,
  multiple: true,
  name: 'drivers_cards_present',
  value: DriverCardPresent,
})
export class DriversCardsPresent extends Property<typeof DriverCardPresent> {}
