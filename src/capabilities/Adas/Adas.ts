import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { AlertnessSystemStatus } from './properties/AlertnessSystemStatus';
import { AutomatedParkingBrake } from './properties/AutomatedParkingBrake';
import { BlindSpotWarningState } from './properties/BlindSpotWarningState';
import { BlindSpotWarningSystem } from './properties/BlindSpotWarningSystem';
import { BlindSpotWarningSystemCoverage } from './properties/BlindSpotWarningSystemCoverage';
import { ForwardCollisionWarningSystem } from './properties/ForwardCollisionWarningSystem';
import { LaneKeepAssistsStates } from './properties/LaneKeepAssistsStates';
import { LaneKeepAssistSystem } from './properties/LaneKeepAssistSystem';
import { ParkAssists } from './properties/ParkAssists';
import { RearCrossWarningSystem } from './properties/RearCrossWarningSystem';
import { Status } from './properties/Status';

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

const AdasDescriptor = {
  category: 'chassis',
  identifier: [0, 108],
  name: 'adas',
  prettyName: 'ADAS',
  properties: {
    alertness_system_status: AlertnessSystemStatus,
    automated_parking_brake: AutomatedParkingBrake,
    blind_spot_warning_state: BlindSpotWarningState,
    blind_spot_warning_system: BlindSpotWarningSystem,
    blind_spot_warning_system_coverage: BlindSpotWarningSystemCoverage,
    forward_collision_warning_system: ForwardCollisionWarningSystem,
    lane_keep_assist_system: LaneKeepAssistSystem,
    lane_keep_assists_states: LaneKeepAssistsStates,
    park_assists: ParkAssists,
    rear_cross_warning_system: RearCrossWarningSystem,
    status: Status,
  },
  state: [
    AlertnessSystemStatus,
    AutomatedParkingBrake,
    BlindSpotWarningState,
    BlindSpotWarningSystem,
    BlindSpotWarningSystemCoverage,
    ForwardCollisionWarningSystem,
    LaneKeepAssistSystem,
    LaneKeepAssistsStates,
    ParkAssists,
    RearCrossWarningSystem,
    Status,
  ],
};

@Descriptor(AdasDescriptor)
export class Adas extends Capability<typeof AdasDescriptor.properties> {
  public static Name = AdasDescriptor.name;
  public static Properties = Properties;
}
