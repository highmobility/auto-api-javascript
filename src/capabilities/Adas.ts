import { Capability } from '../core/Capability';
import { Configuration } from '../configuration';

import { UniversalProperties } from './properties';

enum Properties {
  AlertnessSystemStatus = 'alertness_system_status',
  AutomatedParkingBrake = 'automated_parking_brake',
  BlindSpotWarningState = 'blind_spot_warning_state',
  BlindSpotWarningSystem = 'blind_spot_warning_system',
  BlindSpotWarningSystemCoverage = 'blind_spot_warning_system_coverage',
  ForwardCollisionWarningSystem = 'forward_collision_warning_system',
  LaneKeepAssistSystem = 'lane_keep_assist_system',
  LaneKeepAssistsStates = 'lane_keep_assists_states',
  ParkAssists = 'park_assists',
  RearCrossWarningSystem = 'rear_cross_warning_system',
  Status = 'status',
}

export class Adas extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 108,
  };
  static readonly Name = 'adas';
  static readonly Properties = Properties;
  constructor() {
    super(Configuration.getCapabilityDefinition(Adas.Name), Configuration.getUniversalProperties());
  }
}
