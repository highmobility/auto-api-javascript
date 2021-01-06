import { ClassList } from '../capabilities/classes';

import { Capability } from './Capability';
import { Configuration } from './Configuration';

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

  public static parse(bytes: number[]) {
    const [version, msb, lsb, type, ...data] = bytes;

    const Capability = ClassList.find(
      ({ Identifier }) => Identifier.msb === msb && Identifier.lsb === lsb,
    );

    if (Capability === undefined) {
      throw new Error(`Capability identified by [${msb}, ${lsb}] doesn't exist.`);
    }

    return new Command(type, new Capability(), version).decode(data);
  }

  public encode() {
    return [...this.encodeHeader(), ...this.capability.encode(this.getEncodeDecodeOptions())];
  }

  public get name() {
    switch (this.type) {
      case CommandType.Availability:
        return 'availability';
      case CommandType.Get:
        return 'get';
      case CommandType.Set:
        return 'set';
    }
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
