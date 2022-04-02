import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { String } from '../base/String';
import { UInteger } from '../base/UInteger';

@Size(1)
export class ActionItemId extends UInteger {}

export class ActionItemName extends String {}

const ActionItemDescriptor = {
  items: {
    id: ActionItemId,
    name: ActionItemName,
  },
  order: ['id', 'name'],
};

@Descriptor(ActionItemDescriptor)
export class ActionItem extends CustomType<typeof ActionItemDescriptor.items> {}
