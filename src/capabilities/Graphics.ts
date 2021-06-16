import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  ImageUrl = 'image_url',
}

export class Graphics extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 81,
  };
  static readonly Name = 'graphics';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Graphics.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
