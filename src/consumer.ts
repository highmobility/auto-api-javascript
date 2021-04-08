import { Capabilities, Command, CommandType } from '.';

/**
 * Get / set commands
 */

const request = new Command(CommandType.Get, new Capabilities.Race()).encode();

const command = Command.parse(request);

if (command.type === CommandType.Get) {
  const { capability } = command;

  if (!capability.hasProperty('gear_mode')) {
    capability.createProperty('gear_mode', 'reverse').createComponent('timestamp', new Date());
  }
}

const response = command.setType(CommandType.Set);

console.log(JSON.stringify(response));

/**
 * Multi-command
 */

const multiCommand = new Command(CommandType.Set, new Capabilities.MultiCommand());

const setCapabilitiesWebhooksCommand = new Command(
  CommandType.Set,
  new Capabilities.Capabilities(),
);
setCapabilitiesWebhooksCommand.capability.createProperty('webhooks', {
  available: 'available',
  event: 'trip_started',
});

const setDoorLocksCommand = new Command(CommandType.Set, new Capabilities.Doors());
setDoorLocksCommand.capability.createProperty('locks', {
  location: 'front_right',
  lock_state: 'locked',
});

const setIgnitionStatusCommand = new Command(CommandType.Set, new Capabilities.Ignition());
setIgnitionStatusCommand.capability.createProperty('status', 'off');

[setCapabilitiesWebhooksCommand, setDoorLocksCommand, setIgnitionStatusCommand].forEach((command) =>
  multiCommand.capability.createProperty('multi_commands', command.encode()),
);

const multiCommandEncoded = multiCommand.encode();
const multiCommandAsJSON = JSON.stringify(multiCommand);

console.log(
  multiCommandAsJSON,
  multiCommandAsJSON === JSON.stringify(Command.parse(multiCommandEncoded)),
);
