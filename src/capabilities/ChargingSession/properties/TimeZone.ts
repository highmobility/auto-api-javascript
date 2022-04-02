import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class TimeZoneString extends String {}

@Descriptor({
  id: 5,
  name: 'time_zone',
  value: TimeZoneString,
})
export class TimeZone extends Property<typeof TimeZoneString> {}
