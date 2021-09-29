import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {}

export class Universal extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 21,
  };
  static readonly Name = 'universal';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Universal.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
