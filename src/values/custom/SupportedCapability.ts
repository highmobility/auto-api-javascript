import { Bytes } from '../base/Bytes';
import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { UInteger } from '../base/UInteger';

@Size(2)
export class SupportedCapabilityCapabilityId extends UInteger {}

export class SupportedCapabilitySupportedPropertyIds extends Bytes {}

const SupportedCapabilityDescriptor = {
  items: {
    capability_id: SupportedCapabilityCapabilityId,
    supported_property_ids: SupportedCapabilitySupportedPropertyIds,
  },
  order: ['capability_id', 'supported_property_ids'],
};

@Descriptor(SupportedCapabilityDescriptor)
export class SupportedCapability extends CustomType<typeof SupportedCapabilityDescriptor.items> {}
