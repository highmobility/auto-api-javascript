import { join } from 'path';

import { Bytes, BytesSpec } from './types/Bytes';
import { Capabilities } from './Capabilities';
import { CustomType, CustomTypeRef } from './types/CustomType';
import { CustomTypes } from './types/CustomTypes';
import { Decorators } from './Decorators';
import { Double, DoubleSpec } from './types/Double';
import { Enum, EnumSpec } from './types/Enum';
import { Float, FloatSpec } from './types/Float';
import { Integer, IntegerSpec } from './types/Integer';
import { Module } from './Module';
import { String, StringSpec } from './types/String';
import { Timestamp, TimestampSpec } from './types/Timestamp';
import { UInteger, UIntegerSpec } from './types/UInteger';
import { UnitType, UnitTypeRef } from './types/UnitType';
import { UnitTypes } from './types/UnitTypes';
import { Property } from './Property';
import { PropertyComponents } from './PropertyComponents';

export type BaseTypeSpec =
  | BytesSpec
  | DoubleSpec
  | EnumSpec
  | FloatSpec
  | IntegerSpec
  | StringSpec
  | TimestampSpec
  | UIntegerSpec;

export class Registry {
  public static getInstance(autoAPIPath = '') {
    return (Registry.instance ||= new Registry(autoAPIPath));
  }

  public capabilities?: Capabilities;
  public components?: PropertyComponents;
  public modules!: {
    Capability: Module;
    Decorators: Decorators;
    Property: Module;
    Values: {
      Bytes: Module;
      CustomType: Module;
      CustomTypes: CustomTypes;
      Double: Module;
      Enum: Module;
      Float: Module;
      Integer: Module;
      String: Module;
      Timestamp: Module;
      UInteger: Module;
      UnitType: Module;
      UnitTypes: UnitTypes;
      Value: Module;
    };
  };

  private static instance: Registry;

  private constructor(public autoAPIPath: string) {}

  public createCapabilities() {
    return (this.capabilities ||= new Capabilities());
  }

  public createComponents() {
    return (this.components ||= new PropertyComponents());
  }

  public createBaseTypeDeclaration(module: Module, spec: BaseTypeSpec) {
    const Type = this.getBaseTypeConstructor(spec);

    const name = module.stringToPascalCase(
      module instanceof Property ? `${spec.name}_${Type.TypeName}` : `${module.name}_${spec.name}`,
    );
    const identifier = module.createExportedIdentifier(name);

    module.merge(new Type(module.basePath, name, spec as any));

    return identifier;
  }

  public createTypeDeclaration(module: Module, spec: BaseTypeSpec | UnitTypeRef | CustomTypeRef) {
    if (this.specIsCustomTypeRef(spec)) {
      return this.importCustomType(module, spec);
    }

    if (this.specIsUnitTypeRef(spec)) {
      return this.importUnitType(module, spec);
    }

    return this.createBaseTypeDeclaration(module, spec);
  }

  public getAutoAPIPath(...paths: string[]) {
    return join(this.autoAPIPath, ...paths);
  }

  public getBaseTypeConstructor(spec: BaseTypeSpec) {
    switch (spec.type) {
      case 'bytes':
        return Bytes;
      case 'double':
        return Double;
      case 'enum':
        return Enum;
      case 'float':
        return Float;
      case 'integer':
        return Integer;
      case 'string':
        return String;
      case 'timestamp':
        return Timestamp;
      case 'uinteger':
        return UInteger;
    }
  }

  public importCustomType(module: Module, ref: CustomTypeRef) {
    const identifier = module.stringToPascalCase(ref.type.replace(/(events|types)\./g, ''));

    return module.import(this.modules.Values.CustomTypes, identifier);
  }

  public importUnitType(module: Module, ref: UnitTypeRef) {
    const identifier = module.stringToPascalCase(ref.type.replace(/unit\./g, ''));

    return module.import(this.modules.Values.UnitTypes, identifier);
  }

  public initModules() {
    this.modules = {
      Capability: new Module('/core', 'Capability', 'Capability'),
      Decorators: new Decorators(),
      Property: new Module('/core', 'Property', 'Property'),
      Values: {
        Bytes: new Module('/values/base', 'Bytes', 'Value'),
        CustomType: new Module('/values/base', 'CustomType', 'Value'),
        CustomTypes: new CustomTypes(),
        Double: new Module('/values/base', 'Double', 'Value'),
        Enum: new Module('/values/base', 'Enum', 'Value'),
        Float: new Module('/values/base', 'Float', 'Value'),
        Integer: new Module('/values/base', 'Integer', 'Value'),
        String: new Module('/values/base', 'String', 'Value'),
        Timestamp: new Module('/values/base', 'Timestamp', 'Value'),
        UInteger: new Module('/values/base', 'UInteger', 'Value'),
        UnitType: new Module('/values/base', 'UnitType', 'Value'),
        UnitTypes: new UnitTypes(),
        Value: new Module('/values/base', 'Value', 'Value'),
      },
    };
  }

  public specIsCustomTypeRef(
    spec: BaseTypeSpec | UnitTypeRef | CustomTypeRef,
  ): spec is CustomTypeRef {
    return CustomType.isCustomTypeRef(spec.type);
  }

  public specIsUnitTypeRef(spec: BaseTypeSpec | UnitTypeRef | CustomTypeRef): spec is UnitTypeRef {
    return UnitType.isUnitTypeRef(spec.type);
  }
}
