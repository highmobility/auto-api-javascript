import { CapabilityFactory } from '../factories/CapabilityFactory';

import { capitalize, getKeyValuePairFromObject } from '../utils';

import { Capability } from './Capability';
import { Configuration } from './Configuration';
import { InvalidCommandError, JSONError } from './Error';

export enum CommandType {
  Availability = 0x02,
  Get = 0x00,
  Set = 0x01,
}

export class Command {
  constructor(
    public type: CommandType,
    public capability: Capability,
    public version = Configuration.getApiVersion(),
  ) {}

  public static fromJSON(payload: unknown) {
    try {
      const [name, command] = getKeyValuePairFromObject(payload);
      const [capabilityName, properties] = getKeyValuePairFromObject(command);

      const type = CommandType[capitalize(name) as keyof typeof CommandType];
      if (type === undefined) {
        throw new Error(`Unknown command type: ${name}`);
      }

      return new Command(
        type,
        CapabilityFactory.createFromName(capabilityName).fromJSON(properties),
      );
    } catch (e) {
      throw new JSONError(e);
    }
  }

  public static parse(bytes: number[]) {
    try {
      const [version, msb, lsb, type, ...data] = bytes;

      return new Command(type, CapabilityFactory.createFromIdentifier(msb, lsb), version).decode(
        data,
      );
    } catch (e) {
      throw new InvalidCommandError(e);
    }
  }

  public encode() {
    return [...this.encodeHeader(), ...this.capability.encode(this.getEncodeDecodeOptions())];
  }

  public get name() {
    return CommandType[this.type].toLowerCase();
  }

  public setCapability(capability: Capability) {
    this.capability = capability;
    return this;
  }

  public setType(type: CommandType) {
    this.type = type;
    return this;
  }

  public toJSON() {
    const { capability, name } = this;
    return {
      [name]: {
        [capability.name]: capability,
      },
    };
  }

  protected decode(bytes: number[]) {
    this.capability.decode(bytes, this.getEncodeDecodeOptions());
    return this;
  }

  protected encodeHeader(): number[] {
    const {
      capability: {
        definition: {
          identifier: { msb, lsb },
        },
      },
      type,
      version,
    } = this;

    return [version, msb, lsb, type];
  }

  protected getEncodeDecodeOptions() {
    return { bytesAsPropertyIds: this.type !== CommandType.Set };
  }
}
