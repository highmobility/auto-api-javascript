import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class TextInput extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 68,
  };
  static readonly Name = 'text_input';
  constructor() {
    super(
      Configuration.getCapabilityDefinition(TextInput.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
