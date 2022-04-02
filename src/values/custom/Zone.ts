import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { UInteger } from '../base/UInteger';

@Size(1)
export class ZoneHorizontal extends UInteger {}

@Size(1)
export class ZoneVertical extends UInteger {}

const ZoneDescriptor = {
  items: {
    horizontal: ZoneHorizontal,
    vertical: ZoneVertical,
  },
  order: ['horizontal', 'vertical'],
  size: 2,
};

@Descriptor(ZoneDescriptor)
export class Zone extends CustomType<typeof ZoneDescriptor.items> {}
