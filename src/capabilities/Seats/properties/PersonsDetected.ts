import { Descriptor } from '../../../decorators';
import { PersonDetected } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 2,
  multiple: true,
  name: 'persons_detected',
  value: PersonDetected,
})
export class PersonsDetected extends Property<typeof PersonDetected> {}
