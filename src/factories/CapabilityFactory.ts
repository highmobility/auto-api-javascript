import { ClassList } from '../capabilities/classes';
export class CapabilityFactory {
  public static createFromIdentifier(msb: number, lsb: number) {
    const Capability = ClassList.find(
      ({ Identifier }) => Identifier.msb === msb && Identifier.lsb === lsb,
    );

    if (Capability === undefined) {
      throw new Error(`Capability identified by [${msb}, ${lsb}] doesn't exist.`);
    }

    return new Capability();
  }

  public static createFromName(name: string) {
    const Capability = ClassList.find((CapabilityClass) => CapabilityClass.Name === name);

    if (Capability === undefined) {
      throw new Error(`Capability identified by ${name} doesn't exist.`);
    }

    return new Capability();
  }
}
