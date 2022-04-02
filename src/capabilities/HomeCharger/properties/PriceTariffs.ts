import { Descriptor } from '../../../decorators';
import { PriceTariff } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 18,
  multiple: true,
  name: 'price_tariffs',
  value: PriceTariff,
})
export class PriceTariffs extends Property<typeof PriceTariff> {}
