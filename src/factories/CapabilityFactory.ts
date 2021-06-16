import { ClassList } from '../capabilities/classes';

export class CapabilityFactory {
  public static createFromIdentifier(msb: number, lsb: number) {
    const Capability = ClassList.find(
      ({ Identifier }) => Identifier.msb === msb && Identifier.lsb === lsb,
    );

    if (!Capability) {
      throw new Error(`Invalid capability identifier [${msb}, ${lsb}].`);
    }

    return new Capability();
  }

  public static createFromName(name: string) {
    const Capability = ClassList.find((CapabilityClass) => CapabilityClass.Name === name);

    if (!Capability) {
      throw new Error(`Capability ${name} doesn't exist.`);
    }

    return new Capability();
  }
}
