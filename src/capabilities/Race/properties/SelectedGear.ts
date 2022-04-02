import { Descriptor, Size } from '../../../decorators';
import { Integer } from '../../../values/base/Integer';
import { Property } from '../../../core/Property';

@Size(1)
export class SelectedGearInteger extends Integer {}

@Descriptor({
  id: 12,
  name: 'selected_gear',
  value: SelectedGearInteger,
})
export class SelectedGear extends Property<typeof SelectedGearInteger> {}
