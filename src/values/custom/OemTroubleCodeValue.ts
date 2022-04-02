import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { String } from '../base/String';

import { KeyValue } from './';

export class OemTroubleCodeValueId extends String {}

const OemTroubleCodeValueDescriptor = {
  items: {
    id: OemTroubleCodeValueId,
    key_value: KeyValue,
  },
  order: ['id', 'key_value'],
};

@Descriptor(OemTroubleCodeValueDescriptor)
export class OemTroubleCodeValue extends CustomType<typeof OemTroubleCodeValueDescriptor.items> {}
