import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class DestinationNameString extends String {}

@Descriptor({
  id: 2,
  name: 'destination_name',
  value: DestinationNameString,
})
export class DestinationName extends Property<typeof DestinationNameString> {}
