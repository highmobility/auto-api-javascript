import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  LimpMode = 'limp_mode',
  PreconditioningActive = 'preconditioning_active',
  PreconditioningEnabled = 'preconditioning_enabled',
  PreconditioningError = 'preconditioning_error',
  PreconditioningRemainingTime = 'preconditioning_remaining_time',
  PreconditioningStatus = 'preconditioning_status',
  StartStopEnabled = 'start_stop_enabled',
  StartStopState = 'start_stop_state',
  Status = 'status',
}

export class Engine extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 105,
  };
  static readonly Name = 'engine';
  static readonly Properties = Properties;
  constructor() {
    super(
      Configuration.getCapabilityDefinition(Engine.Name),
      Configuration.getUniversalProperties(),
    );
  }
}
