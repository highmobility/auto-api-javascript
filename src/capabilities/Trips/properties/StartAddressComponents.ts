import { AddressComponent } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 14,
  multiple: true,
  name: 'start_address_components',
  value: AddressComponent,
})
export class StartAddressComponents extends Property<typeof AddressComponent> {}
