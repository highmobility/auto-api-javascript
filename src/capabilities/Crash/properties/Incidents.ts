import { CrashIncident } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 1,
  multiple: true,
  name: 'incidents',
  value: CrashIncident,
})
export class Incidents extends Property<typeof CrashIncident> {}
