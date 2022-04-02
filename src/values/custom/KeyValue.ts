import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { String } from '../base/String';

export class KeyValueKey extends String {}

export class KeyValueValue extends String {}

const KeyValueDescriptor = {
  items: {
    key: KeyValueKey,
    value: KeyValueValue,
  },
  order: ['key', 'value'],
};

@Descriptor(KeyValueDescriptor)
export class KeyValue extends CustomType<typeof KeyValueDescriptor.items> {}
