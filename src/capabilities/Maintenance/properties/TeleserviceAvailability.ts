import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const TeleserviceAvailabilityEnumDescriptor = {
  values: {
    error: 3,
    idle: 1,
    pending: 0,
    successful: 2,
  },
  size: 1,
};

@Descriptor(TeleserviceAvailabilityEnumDescriptor)
export class TeleserviceAvailabilityEnum extends Enum<
  keyof typeof TeleserviceAvailabilityEnumDescriptor.values
> {}

@Descriptor({
  id: 5,
  name: 'teleservice_availability',
  value: TeleserviceAvailabilityEnum,
})
export class TeleserviceAvailability extends Property<typeof TeleserviceAvailabilityEnum> {}
