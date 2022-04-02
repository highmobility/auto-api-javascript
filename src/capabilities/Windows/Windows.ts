import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { OpenPercentages } from './properties/OpenPercentages';
import { Positions } from './properties/Positions';

enum Properties {
  OpenPercentages = 'open_percentages',
  Positions = 'positions',
}

const WindowsDescriptor = {
  category: 'chassis',
  identifier: [0, 69],
  name: 'windows',
  prettyName: 'Windows',
  properties: {
    open_percentages: OpenPercentages,
    positions: Positions,
  },
  state: [OpenPercentages, Positions],
};

@Descriptor(WindowsDescriptor)
export class Windows extends Capability<typeof WindowsDescriptor.properties> {
  public static Name = WindowsDescriptor.name;
  public static Properties = Properties;
}
