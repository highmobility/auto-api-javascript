import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { Accelerations } from './properties/Accelerations';
import { AcceleratorPedalIdleSwitch } from './properties/AcceleratorPedalIdleSwitch';
import { AcceleratorPedalKickdownSwitch } from './properties/AcceleratorPedalKickdownSwitch';
import { BrakePedalPosition } from './properties/BrakePedalPosition';
import { BrakePedalSwitch } from './properties/BrakePedalSwitch';
import { BrakePressure } from './properties/BrakePressure';
import { BrakeTorqueVectorings } from './properties/BrakeTorqueVectorings';
import { ClutchPedalSwitch } from './properties/ClutchPedalSwitch';
import { ElectronicStabilityProgram } from './properties/ElectronicStabilityProgram';
import { GasPedalPosition } from './properties/GasPedalPosition';
import { GearMode } from './properties/GearMode';
import { Oversteering } from './properties/Oversteering';
import { RearSuspensionSteering } from './properties/RearSuspensionSteering';
import { SelectedGear } from './properties/SelectedGear';
import { SteeringAngle } from './properties/SteeringAngle';
import { Understeering } from './properties/Understeering';
import { VehicleMoving } from './properties/VehicleMoving';
import { YawRate } from './properties/YawRate';

enum Properties {
  Accelerations = 'accelerations',
  AcceleratorPedalIdleSwitch = 'accelerator_pedal_idle_switch',
  AcceleratorPedalKickdownSwitch = 'accelerator_pedal_kickdown_switch',
  BrakePedalPosition = 'brake_pedal_position',
  BrakePedalSwitch = 'brake_pedal_switch',
  BrakePressure = 'brake_pressure',
  BrakeTorqueVectorings = 'brake_torque_vectorings',
  ClutchPedalSwitch = 'clutch_pedal_switch',
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

const RaceDescriptor = {
  category: 'diagnostics',
  identifier: [0, 87],
  name: 'race',
  prettyName: 'Race',
  properties: {
    accelerations: Accelerations,
    accelerator_pedal_idle_switch: AcceleratorPedalIdleSwitch,
    accelerator_pedal_kickdown_switch: AcceleratorPedalKickdownSwitch,
    brake_pedal_position: BrakePedalPosition,
    brake_pedal_switch: BrakePedalSwitch,
    brake_pressure: BrakePressure,
    brake_torque_vectorings: BrakeTorqueVectorings,
    clutch_pedal_switch: ClutchPedalSwitch,
    electronic_stability_program: ElectronicStabilityProgram,
    gas_pedal_position: GasPedalPosition,
    gear_mode: GearMode,
    oversteering: Oversteering,
    rear_suspension_steering: RearSuspensionSteering,
    selected_gear: SelectedGear,
    steering_angle: SteeringAngle,
    understeering: Understeering,
    vehicle_moving: VehicleMoving,
    yaw_rate: YawRate,
  },
  state: [
    Accelerations,
    AcceleratorPedalIdleSwitch,
    AcceleratorPedalKickdownSwitch,
    BrakePedalPosition,
    BrakePedalSwitch,
    BrakePressure,
    BrakeTorqueVectorings,
    ClutchPedalSwitch,
    ElectronicStabilityProgram,
    GasPedalPosition,
    GearMode,
    Oversteering,
    RearSuspensionSteering,
    SelectedGear,
    SteeringAngle,
    Understeering,
    VehicleMoving,
    YawRate,
  ],
};

@Descriptor(RaceDescriptor)
export class Race extends Capability<typeof RaceDescriptor.properties> {
  public static Name = RaceDescriptor.name;
  public static Properties = Properties;
}
