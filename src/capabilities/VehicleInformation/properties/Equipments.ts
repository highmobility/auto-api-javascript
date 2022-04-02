import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class EquipmentsString extends String {}

@Descriptor({
  id: 17,
  multiple: true,
  name: 'equipments',
  value: EquipmentsString,
})
export class Equipments extends Property<typeof EquipmentsString> {}
