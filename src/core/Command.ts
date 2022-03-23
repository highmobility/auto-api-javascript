import { CapabilityClass } from '../capabilities/classes';
import { CapabilityFactory } from '../factories/CapabilityFactory';

import {
  base64ToByteArray,
  byteArrayToBase64,
  capitalize,
  getKeyValuePairFromObject,
} from '../utils';

import { Configuration } from './Configuration';
import { FormatError, InvalidCommandError } from './Error';

export enum CommandType {
  Availability = 0x02,
  Get = 0x00,
  Set = 0x01,
}

export class Command<C extends InstanceType<CapabilityClass> = InstanceType<CapabilityClass>> {
  constructor(
    public type: CommandType,
    public capability: C,
    public version = Configuration.getApiVersion(),
  ) {}

  public static fromBase64(payload: string) {
    return Command.parse(base64ToByteArray(payload));
  }

  public static fromJSON(payload: unknown) {
    try {
      const [name, command] = getKeyValuePairFromObject(payload);
      const [capabilityName, properties] = getKeyValuePairFromObject(command);

      const type = CommandType[capitalize(name) as keyof typeof CommandType];
      if (type === undefined) {
        throw new Error(`Unknown command type: ${name}.`);
      }

      return new Command(
        type,
        CapabilityFactory.createFromName(capabilityName).fromJSON(properties),
      );
    } catch (e) {
      throw new FormatError(e as Error);
    }
  }

  public static parse<C extends InstanceType<CapabilityClass> = InstanceType<CapabilityClass>>(
    bytes: number[],
  ) {
    try {
      const [version, msb, lsb, type, ...data] = bytes;

      return new Command(
        type,
        CapabilityFactory.createFromIdentifier(msb, lsb) as C,
        version,
      ).decode(data);
    } catch (e) {
      throw new InvalidCommandError(e as Error);
    }
  }

  public encode() {
    return [...this.encodeHeader(), ...this.capability.encode(this.getEncodeDecodeOptions())];
  }

  public get name() {
    return CommandType[this.type].toLowerCase();
  }

  public setCapability(capability: C) {
    this.capability = capability;
    return this;
  }

  public setType(type: CommandType) {
    this.type = type;
    return this;
  }

  public toBase64() {
    return byteArrayToBase64(this.encode());
  }

  public toJSON() {
    return this.valueOf();
  }

  public valueOf() {
    const { capability, name } = this;
    return {
      [name]: {
        [capability.name]: capability.valueOf(),
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
