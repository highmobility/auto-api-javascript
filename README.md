# AutoAPI JavaScript

AutoAPI for JavaScript/TypeScript - the parsing library for the Auto API vehicle data model

## Introduction

This library aims to provide a low-level access for building and decoding Auto API commands/data structures from/to binary/JSON. Both CommonJS and ES builds are included in this package.

## Basic usage

### Install package

```
npm install @highmobility/auto-api-javascript --save
```

### Get / Set commands

```typescript
import { Command, CommandType } from '@highmobility/auto-api-javascript';
import { Race } from '@highmobility/auto-api-javascript/lib/capabilities';


// Request Race state properties
const request = new Command(CommandType.Get, new Race()).encode();

// Parse command with type hinting
const command = Command.parse<Race>(request);

// Add property
if (command.type === CommandType.Get) {
  const { capability } = command;

  if (!capability.hasProperty(Race.Properties.GearMode)) {
    capability
      .createProperty(Race.Properties.GearMode, 'reverse')
      .createComponent('timestamp', new Date());
  }
}

// Encode response
const response = command.setType(CommandType.Set).encode();
```

### Multi-command

```typescript
import { Command, CommandType } from '@highmobility/auto-api-javascript';
import { Capabilities, Doors, Ignition, MultiCommand } from '@highmobility/auto-api-javascript/lib/capabilities';


const multiCommand = new Command(CommandType.Set, new MultiCommand());

// Command A
const setCapabilitiesWebhooksCommand = new Command(CommandType.Set, new Capabilities());
setCapabilitiesWebhooksCommand.capability.createProperty(Capabilities.Properties.Webhooks, {
  available: 'available',
  event: 'trip_started',
});

// Command B
const doors = new Doors();
doors.createProperty(Doors.Properties.Locks, {
  location: 'front_right',
  lock_state: 'locked',
});
const setDoorLocksCommand = new Command(CommandType.Set, doors);

// Command C
const setIgnitionStatusCommand = new Command(CommandType.Set, new Ignition());
setIgnitionStatusCommand.capability.createProperty(Ignition.Properties.Status, 'off');

// Set multi-command properties by encoding (sub)commands
[setCapabilitiesWebhooksCommand, setDoorLocksCommand, setIgnitionStatusCommand].forEach((command) =>
  multiCommand.capability.createProperty(MultiCommand.Properties.MultiCommands, command.encode()),
);

// Get JSON representation of multi-command
const multiCommandAsJSON = JSON.stringify(multiCommand);

// Encode multi-command
const multiCommandEncoded = multiCommand.encode();

// Parsing binary encoded command as JSON must yield the same result
console.log(
  multiCommandAsJSON === JSON.stringify(Command.parse(multiCommandEncoded)),
);
```

### Configuration helper & Factories

```typescript
import { CapabilityFactory, Configuration } from '@highmobility/auto-api-javascript';

// Create capability states from Auto API examples
const capabilities = Configuration.getConfiguration().capabilities;

const state = Object.entries(capabilities).reduce((state, [name, { properties }]) => {
  const capability = CapabilityFactory.createFromName(name);

  for (const { name: propertyName } of Object.values(properties)) {
    capability.createPropertiesFromExamples(propertyName as any);
  }

  return {
    ...state,
    [name]: capability.toJSON(),
  };
}, {});

console.log(JSON.stringify(state, null, 2));
```
