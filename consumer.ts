import { CapabilityFactory, Command, CommandType, Configuration } from './lib';
import { Capabilities, Doors, Ignition, MultiCommand, Race } from './lib/capabilities';

/**
 * $ npm run build:commonjs && npx ts-node consumer.ts
 */

/**
 * Get / set commands
 */

const request = new Command(CommandType.Get, new Race()).encode();

const command = Command.parse<Race>(request);

if (command.type === CommandType.Get) {
  const { capability } = command;

  if (!capability.hasProperty(Race.Properties.GearMode)) {
    capability
      .createProperty(Race.Properties.GearMode, 'reverse')
      .createComponent('timestamp', new Date());
  }
}

const response = command.setType(CommandType.Set);

console.log(JSON.stringify(response));

/**
 * Multi-command
 */

const multiCommand = new Command(CommandType.Set, new MultiCommand());

const setCapabilitiesWebhooksCommand = new Command(CommandType.Set, new Capabilities());
setCapabilitiesWebhooksCommand.capability.createProperty(Capabilities.Properties.Webhooks, {
  available: 'available',
  event: 'trip_started',
});

const setDoorLocksCommand = new Command(CommandType.Set, new Doors());
setDoorLocksCommand.capability.createProperty(Doors.Properties.Locks, {
  location: 'front_right',
  lock_state: 'locked',
});

const setIgnitionStatusCommand = new Command(CommandType.Set, new Ignition());
setIgnitionStatusCommand.capability.createProperty(Ignition.Properties.Status, 'off');

[setCapabilitiesWebhooksCommand, setDoorLocksCommand, setIgnitionStatusCommand].forEach((command) =>
  multiCommand.capability.createProperty(MultiCommand.Properties.MultiCommands, command.encode()),
);

const multiCommandEncoded = multiCommand.encode();
const multiCommandAsJSON = JSON.stringify(multiCommand);

console.log(
  multiCommandAsJSON,
  multiCommandAsJSON === JSON.stringify(Command.parse(multiCommandEncoded)),
);

/**
 * Full state from Auto API examples
 */
const capabilities = Configuration.getConfiguration().capabilities;
const state = Object.entries(capabilities).reduce((state, [name, { properties }]) => {
  const capability = CapabilityFactory.createFromName(name);

  for (const { name: propertyName } of Object.values(properties)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    capability.createPropertiesFromExamples(propertyName as any);
  }

  return {
    ...state,
    [name]: capability.toJSON(),
  };
}, {});
console.log(JSON.stringify(state, null, 2));
