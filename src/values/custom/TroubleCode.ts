import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { String } from '../base/String';
import { UInteger } from '../base/UInteger';

export class TroubleCodeEcuId extends String {}

export class TroubleCodeId extends String {}

@Size(1)
export class TroubleCodeOccurrences extends UInteger {}

export class TroubleCodeStatus extends String {}

const TroubleCodeSystemDescriptor = {
  values: {
    body: 1,
    chassis: 2,
    network: 4,
    powertrain: 3,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(TroubleCodeSystemDescriptor)
export class TroubleCodeSystem extends Enum<keyof typeof TroubleCodeSystemDescriptor.values> {}

const TroubleCodeDescriptor = {
  items: {
    ecu_id: TroubleCodeEcuId,
    id: TroubleCodeId,
    occurrences: TroubleCodeOccurrences,
    status: TroubleCodeStatus,
    system: TroubleCodeSystem,
  },
  order: ['occurrences', 'id', 'ecu_id', 'status', 'system'],
};

@Descriptor(TroubleCodeDescriptor)
export class TroubleCode extends CustomType<typeof TroubleCodeDescriptor.items> {}
