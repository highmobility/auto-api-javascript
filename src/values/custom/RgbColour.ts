import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { UInteger } from '../base/UInteger';

@Size(1)
export class RgbColourBlue extends UInteger {}

@Size(1)
export class RgbColourGreen extends UInteger {}

@Size(1)
export class RgbColourRed extends UInteger {}

const RgbColourDescriptor = {
  items: {
    blue: RgbColourBlue,
    green: RgbColourGreen,
    red: RgbColourRed,
  },
  order: ['red', 'green', 'blue'],
  size: 3,
};

@Descriptor(RgbColourDescriptor)
export class RgbColour extends CustomType<typeof RgbColourDescriptor.items> {}
