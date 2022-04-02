import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';

import { ActiveState, LocationLongitudinal } from './';

const LightDescriptor = {
  items: {
    location: LocationLongitudinal,
    state: ActiveState,
  },
  order: ['location', 'state'],
  size: 2,
};

@Descriptor(LightDescriptor)
export class Light extends CustomType<typeof LightDescriptor.items> {}
