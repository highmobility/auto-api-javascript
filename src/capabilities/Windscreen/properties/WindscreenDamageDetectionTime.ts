import { Descriptor, Size } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Timestamp } from '../../../values/base/Timestamp';

@Size(8)
export class WindscreenDamageDetectionTimeTimestamp extends Timestamp {}

@Descriptor({
  id: 8,
  name: 'windscreen_damage_detection_time',
  value: WindscreenDamageDetectionTimeTimestamp,
})
export class WindscreenDamageDetectionTime extends Property<
  typeof WindscreenDamageDetectionTimeTimestamp
> {}
