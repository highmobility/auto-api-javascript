import { AddressComponent } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 15,
  multiple: true,
  name: 'end_address_components',
  value: AddressComponent,
})
export class EndAddressComponents extends Property<typeof AddressComponent> {}
