import { Bytes } from '../../../values/base/Bytes';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

export class FailedPropertyIdsBytes extends Bytes {}

@Descriptor({
  id: 5,
  name: 'failed_property_ids',
  value: FailedPropertyIdsBytes,
})
export class FailedPropertyIds extends Property<typeof FailedPropertyIdsBytes> {}
