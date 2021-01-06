import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

export class TextInput extends Capability {
  static readonly Identifier = {
    msb: 0,
    lsb: 68,
  };
  constructor() {
    super(
      Configuration.getCapabilityDefinitionByName('text_input'),
      Configuration.getUniversalProperties(),
    );
  }
}
