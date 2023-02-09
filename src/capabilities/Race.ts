import { Capability } from '../core/Capability';
import { Configuration } from '../core/Configuration';

import { UniversalProperties } from './properties';

enum Properties {
  Accelerations = 'accelerations',
  AcceleratorDurations = 'accelerator_durations',
  AcceleratorPedalIdleSwitch = 'accelerator_pedal_idle_switch',
  AcceleratorPedalKickdownSwitch = 'accelerator_pedal_kickdown_switch',
  BrakePedalPosition = 'brake_pedal_position',
  BrakePedalSwitch = 'brake_pedal_switch',
  BrakePressure = 'brake_pressure',
  BrakeTorqueVectorings = 'brake_torque_vectorings',
  ClutchPedalSwitch = 'clutch_pedal_switch',
  DrivetrainState = 'drivetrain_state',
  ElectronicStabilityProgram = 'electronic_stability_program',
  GasPedalPosition = 'gas_pedal_position',
  GearMode = 'gear_mode',
  Oversteering = 'oversteering',
  RearSuspensionSteering = 'rear_suspension_steering',
  SelectedGear = 'selected_gear',
  SteeringAngle = 'steering_angle',
  Understeering = 'understeering',
  VehicleMoving = 'vehicle_moving',
  YawRate = 'yaw_rate',
}

export class Race extends Capability<`${Properties}` | `${UniversalProperties}`> {
  static readonly Identifier = {
    msb: 0,
    lsb: 87,
  };
  static readonly Name = 'race';
  static readonly Properties = Properties;
  constructor() {
    super(Configuration.getCapabilityDefinition(Race.Name), Configuration.getUniversalProperties());
  }
}
