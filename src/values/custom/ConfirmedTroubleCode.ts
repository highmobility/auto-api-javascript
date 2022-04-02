import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { String } from '../base/String';

export class ConfirmedTroubleCodeEcuAddress extends String {}

export class ConfirmedTroubleCodeEcuVariantName extends String {}

export class ConfirmedTroubleCodeId extends String {}

export class ConfirmedTroubleCodeStatus extends String {}

const ConfirmedTroubleCodeDescriptor = {
  items: {
    ecu_address: ConfirmedTroubleCodeEcuAddress,
    ecu_variant_name: ConfirmedTroubleCodeEcuVariantName,
    id: ConfirmedTroubleCodeId,
    status: ConfirmedTroubleCodeStatus,
  },
  order: ['id', 'ecu_address', 'ecu_variant_name', 'status'],
};

@Descriptor(ConfirmedTroubleCodeDescriptor)
export class ConfirmedTroubleCode extends CustomType<typeof ConfirmedTroubleCodeDescriptor.items> {}
