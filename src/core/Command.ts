import { CapabilityFactory } from '../factories';

import { capitalize, getKeyValuePairFromObject } from '../utils';

import { Capability } from './Capability';
import { Configuration } from './Configuration';
import { JSONError } from './Error';

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
      const [capabilityName] = getKeyValuePairFromObject(command);

      const type = CommandType[capitalize(name) as keyof typeof CommandType];
      if (type === undefined) {
        throw new Error(`Unknown command type: ${name}`);
      }

      const capability = CapabilityFactory.createFromName(capabilityName).fromJSON(command);

      return new Command(type, capability);
    } catch (e) {
      throw new JSONError(e);
    }
  }

  public static parse(bytes: number[]) {
    const [version, msb, lsb, type, ...data] = bytes;

    const capability = CapabilityFactory.createFromIdentifier(msb, lsb);

    return new Command(type, capability, version).decode(data);
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
      [name]: capability,
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
