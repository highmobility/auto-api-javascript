import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { InsideLight } from './properties/InsideLight';
import { OutsideLight } from './properties/OutsideLight';

enum Properties {
  InsideLight = 'inside_light',
  OutsideLight = 'outside_light',
}

const LightConditionsDescriptor = {
  category: 'environment',
  identifier: [0, 84],
  name: 'light_conditions',
  prettyName: 'Light Conditions',
  properties: {
    inside_light: InsideLight,
    outside_light: OutsideLight,
  },
  state: [InsideLight, OutsideLight],
};

@Descriptor(LightConditionsDescriptor)
export class LightConditions extends Capability<typeof LightConditionsDescriptor.properties> {
  public static Name = LightConditionsDescriptor.name;
  public static Properties = Properties;
}
