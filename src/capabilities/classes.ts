import { Adas } from './Adas';
import { Browser } from './Browser';
import { Capabilities } from './Capabilities';
import { Charging } from './Charging';
import { ChargingSession } from './ChargingSession';
import { ChassisSettings } from './ChassisSettings';
import { Climate } from './Climate';
import { Crash } from './Crash';
import { CruiseControl } from './CruiseControl';
import { DashboardLights } from './DashboardLights';
import { Diagnostics } from './Diagnostics';
import { Doors } from './Doors';
import { DriverFatigue } from './DriverFatigue';
import { Engine } from './Engine';
import { FailureMessage } from './FailureMessage';
import { FirmwareVersion } from './FirmwareVersion';
import { Fueling } from './Fueling';
import { Graphics } from './Graphics';
import { HeartRate } from './HeartRate';
import { Historical } from './Historical';
import { HomeCharger } from './HomeCharger';
import { HonkHornFlashLights } from './HonkHornFlashLights';
import { Hood } from './Hood';
import { Ignition } from './Ignition';
import { KeyfobPosition } from './KeyfobPosition';
import { LightConditions } from './LightConditions';
import { Lights } from './Lights';
import { Maintenance } from './Maintenance';
import { Messaging } from './Messaging';
import { Mobile } from './Mobile';
import { MultiCommand } from './MultiCommand';
import { NaviDestination } from './NaviDestination';
import { Notifications } from './Notifications';
import { Offroad } from './Offroad';
import { ParkingBrake } from './ParkingBrake';
import { ParkingTicket } from './ParkingTicket';
import { PowerTakeoff } from './PowerTakeoff';
import { Race } from './Race';
import { RemoteControl } from './RemoteControl';
import { RooftopControl } from './RooftopControl';
import { Seats } from './Seats';
import { Tachograph } from './Tachograph';
import { TextInput } from './TextInput';
import { TheftAlarm } from './TheftAlarm';
import { Trips } from './Trips';
import { Trunk } from './Trunk';
import { Usage } from './Usage';
import { ValetMode } from './ValetMode';
import { VehicleInformation } from './VehicleInformation';
import { VehicleLocation } from './VehicleLocation';
import { VehicleStatus } from './VehicleStatus';
import { VehicleTime } from './VehicleTime';
import { VideoHandover } from './VideoHandover';
import { WakeUp } from './WakeUp';
import { WeatherConditions } from './WeatherConditions';
import { WiFi } from './WiFi';
import { Windows } from './Windows';
import { Windscreen } from './Windscreen';

export type CapabilityClass =
  | typeof Adas
  | typeof Browser
  | typeof Capabilities
  | typeof Charging
  | typeof ChargingSession
  | typeof ChassisSettings
  | typeof Climate
  | typeof Crash
  | typeof CruiseControl
  | typeof DashboardLights
  | typeof Diagnostics
  | typeof Doors
  | typeof DriverFatigue
  | typeof Engine
  | typeof FailureMessage
  | typeof FirmwareVersion
  | typeof Fueling
  | typeof Graphics
  | typeof HeartRate
  | typeof Historical
  | typeof HomeCharger
  | typeof HonkHornFlashLights
  | typeof Hood
  | typeof Ignition
  | typeof KeyfobPosition
  | typeof LightConditions
  | typeof Lights
  | typeof Maintenance
  | typeof Messaging
  | typeof Mobile
  | typeof MultiCommand
  | typeof NaviDestination
  | typeof Notifications
  | typeof Offroad
  | typeof ParkingBrake
  | typeof ParkingTicket
  | typeof PowerTakeoff
  | typeof Race
  | typeof RemoteControl
  | typeof RooftopControl
  | typeof Seats
  | typeof Tachograph
  | typeof TextInput
  | typeof TheftAlarm
  | typeof Trips
  | typeof Trunk
  | typeof Usage
  | typeof ValetMode
  | typeof VehicleInformation
  | typeof VehicleLocation
  | typeof VehicleStatus
  | typeof VehicleTime
  | typeof VideoHandover
  | typeof WakeUp
  | typeof WeatherConditions
  | typeof WiFi
  | typeof Windows
  | typeof Windscreen;

export const ClassList: Array<CapabilityClass> = [
  Adas,
  Browser,
  Capabilities,
  Charging,
  ChargingSession,
  ChassisSettings,
  Climate,
  Crash,
  CruiseControl,
  DashboardLights,
  Diagnostics,
  Doors,
  DriverFatigue,
  Engine,
  FailureMessage,
  FirmwareVersion,
  Fueling,
  Graphics,
  HeartRate,
  Historical,
  HomeCharger,
  HonkHornFlashLights,
  Hood,
  Ignition,
  KeyfobPosition,
  LightConditions,
  Lights,
  Maintenance,
  Messaging,
  Mobile,
  MultiCommand,
  NaviDestination,
  Notifications,
  Offroad,
  ParkingBrake,
  ParkingTicket,
  PowerTakeoff,
  Race,
  RemoteControl,
  RooftopControl,
  Seats,
  Tachograph,
  TextInput,
  TheftAlarm,
  Trips,
  Trunk,
  Usage,
  ValetMode,
  VehicleInformation,
  VehicleLocation,
  VehicleStatus,
  VehicleTime,
  VideoHandover,
  WakeUp,
  WeatherConditions,
  WiFi,
  Windows,
  Windscreen,
];
