/* eslint-disable prettier/prettier */
// import { hexToUint8Array } from './utils';

import { Capabilities, Command, CommandType, Values } from '.';

// Test case(s) 1
const commands = [
  [
    0x0b,
    0x00, 0x23, // charging
    0x01, // set
    0x0c, // charge_mode
    0x00, 0x04,
    0x01,
    0x00, 0x01,
    0x00, // immediate
  ],
  [
    0x0b,
    0x00, 0x36, // lights
    0x01, // set
    0x01, // front_exterior_light
    0x00, 0x04,
    0x01,
    0x00, 0x01,
    0x02, // active_with_full_beam
    0x0a, // switch_position
    0x00, 0x04,
    0x01,
    0x00, 0x01,
    0x03, // parking_light_left
  ],
  [
    0x0b,
    0x00, 0x36, // lights
    0x00, // get all
  ],
  [
    0x0b,
    0x00, 0x36, // lights
    0x00, // get
    0x05, // reverse_light
    0x07, // fog_lights
    0xa3, // vin (universal prop)
  ],
  [
    12,
    0, 2, // failure_message
    1, // set
    1, // prop failed_message_id
    0, 5,
    1,  0, 2, 0, 87,
    2, // prop failed_message_type
    0, 4,
    1, 0, 1, 0,
    3, // prop failure_reason
    0, 4,
    1,
    0, 1,
    0 // unsupported_capability
  ],
  [
    12,
    0, 52, // maintenance
    1, // set
    1, // days_to_next_service
    0, 15,
    5, 0, 12, 0, 14,
    0, 64, 80, 0, 0, 0, 0, 0, 0, 1,
    2, // kilometers_to_next_service
    0, 15, 5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0,
    0, 0, 0, 1,
    3,
    0, 15,
    5, 0, 12, 0, 14,
    0, 64, 80, 0, 0, 0, 0, 0, 0, 1,
    4,
    0, 15,
    5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0,
    0, 0, 0, 1,
    5,
    0, 15,
    5, 0, 12, 0, 14,
    0, 64, 80, 0, 0, 0, 0, 0, 0, 1,
    7,
    0, 15, 5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0,
    0, 0, 0, 1,
    10,
    0, 15,
    5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0, 0, 0, 0, 1,
    11,
    0, 15, 
    5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0, 0, 0, 0, 1,
    12,
    0, 15,
    5, 0, 12, 0, 14, 0, 64, 80, 0, 0, 0, 0, 0, 0, 1
  ],
  [
    12,
    0, 105, // engine
    1, // set
    1,  // status
    0, 4,
    1, // data
    0, 1,
    0,  // value
  ],
  [
    12, 
    0, 16, // capabilities
    1, // set 
    1, // capabilities
    0, 18, 
    1, 
    0, 15, 
    0, 35, 0, 11, 2, 3, 10, 11, 12, 14, 15, 16, 17, 22, 23, 
    1, 
    0, 9, 
    1, 
    0, 6, 
    0, 36, 0, 2, 2, 5, 
    1, 
    0, 8, 
    1, 0, 5, 0, 97, 0, 1, 1,
    1, 
    0, 18, 
    1, 
    0, 15, 0, 51, 0, 11, 1, 3, 5, 6, 11, 15, 17, 24, 25, 26, 29, 
    1, 
    0, 10,
    1, 0, 7, 0, 32, 0, 3, 3, 4, 6, 
    1, 
    0, 8, 
    1, 0, 5, 0, 105, 0, 1, 1, 
    1, 
    0, 8,
    1, 0, 5, 0, 64, 0, 1, 2, 
    1, 
    0, 8, 
    1, 0, 5, 0, 103, 0, 1, 1, 
    1, 
    0, 9, 
    1, 0, 6, 0, 53, 0, 2, 1, 2, 
    1, 
    0, 10, 
    1, 0, 7, 0, 54, 0, 3, 1, 8, 9, 
    1, 
    0, 16, 
    1, 0, 13, 0, 52, 0, 9, 1, 2, 3, 4, 5, 7, 10, 11, 12, 
    1, 
    0, 8, 
    1, 0, 5, 0, 102, 0, 1, 1, 
    1, 
    0, 10, 
    1, 0, 7, 0, 87, 0, 3, 11, 12, 18, 
    1, 
    0, 11, 
    1, 0, 8, 0, 37, 0, 4, 2, 3, 4, 5, 
    1, 
    0, 9, 
    1, 0, 6, 0, 33, 0, 2, 1, 2, 
    1, 
    0, 20, 
    1, 0, 17, 0, 104, 0, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
    1, 0, 
    10, 1, 0, 7, 0, 48, 0, 3, 4, 5, 6, 
    1, 
    0, 8, 
    1, 0, 5, 0, 69, 0, 1, 3
  ]
];

for (const bytes of commands) {
  const command = Command.parse(bytes);
  const commandAsJSON = JSON.stringify(command);
  const fromJSONString = JSON.stringify(Command.fromJSON(JSON.parse(commandAsJSON)));

  console.log(commandAsJSON, fromJSONString === commandAsJSON);
}

// Test case 2

// Client
const capability = new Capabilities.Race();
capability.createProperty('gear_mode');
const request = new Command(CommandType.Get, capability).encode();

// Consumer populates command with state and responds with set command
const command = Command.parse(request);

if (command.type === CommandType.Get) {
  const { capability } = command;

  // (or iterate over all props...)
  if (capability.hasProperty('gear_mode')) {
    const property = capability.getProperty('gear_mode');

    property!.createComponent('data', 'reverse');
    property!.createComponent('timestamp', new Date());
  }

  const response = command.setType(CommandType.Set);

  console.log(JSON.stringify(response), response.encode());
}

// Test case 3

const customValueDefinition = {
  name: 'test',
  name_cased: 'Test',
  type: 'custom',
  items: [
    {
      name: 'a',
      name_cased: 'A',
      type: 'enum',
      size: 1,
      enum_values: [
        {
          name: 'v1',
          id: 0,
        },
        {
          name: 'v2',
          id: 1,
        },
      ],
    },
    {
      name: 'b',
      name_cased: 'B',
      type: 'string',
    },
    {
      name: 'c',
      name_cased: 'C',
      type: 'integer',
      size: 1,
    },
    {
      name: 'd',
      name_cased: 'D',
      type: 'double',
      size: 8,
    },
  ],
};
const encodedCustomValue = new Values.CustomValue(customValueDefinition)
  .setValue({ a: 1, b: 'Long string....', c: 1, d: 0.5400000214576721 })
  .encode();
const decodedCustomValue = new Values.CustomValue(customValueDefinition).decode(encodedCustomValue);

console.log(encodedCustomValue, JSON.stringify(decodedCustomValue));

// Test case 4

const multiCommand = new Command(CommandType.Set, new Capabilities.MultiCommand());

const setDoorLocksCommand = new Command(CommandType.Set, new Capabilities.Doors());
setDoorLocksCommand.capability.createProperty('locks', {
  location: 'front_right',
  lock_state: 'locked',
});

const setIgnitionStatusCommand = new Command(CommandType.Set, new Capabilities.Ignition());
setIgnitionStatusCommand.capability.createProperty('status', 'off');

[setDoorLocksCommand, setIgnitionStatusCommand].forEach((command) =>
  multiCommand.capability.createProperty('multi_commands', command.encode()),
);

const multiCommandEncoded = multiCommand.encode();
const multiCommandAsJSON = JSON.stringify(multiCommand);

console.log(
  multiCommandAsJSON,
  multiCommandAsJSON === JSON.stringify(Command.parse(multiCommandEncoded)),
);


