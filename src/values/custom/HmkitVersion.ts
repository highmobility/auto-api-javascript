import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { UInteger } from '../base/UInteger';

@Size(1)
export class HmkitVersionMajor extends UInteger {}

@Size(1)
export class HmkitVersionMinor extends UInteger {}

@Size(1)
export class HmkitVersionPatch extends UInteger {}

const HmkitVersionDescriptor = {
  items: {
    major: HmkitVersionMajor,
    minor: HmkitVersionMinor,
    patch: HmkitVersionPatch,
  },
  order: ['major', 'minor', 'patch'],
  size: 3,
};

@Descriptor(HmkitVersionDescriptor)
export class HmkitVersion extends CustomType<typeof HmkitVersionDescriptor.items> {}
