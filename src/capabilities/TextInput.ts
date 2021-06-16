import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Text = 'text',
}

export class TextInput extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 68,
  };
  static readonly Name = 'text_input';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(TextInput.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
