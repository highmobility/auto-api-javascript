import fs from 'fs';

import {
  Capability,
  Configuration,
  MeasurementTypes,
  Properties,
  PropertyComponents,
  TypeDefinition,
  TypeDefinitions,
} from '@/types';

import {
  CapabilitiesFileList,
  CapabilitiesPath,
  ConfigurationFilePath,
  CustomTypesFile,
  CustomTypesRegex,
  PropertyComponentsFile,
  UnitTypesFile,
  UnitTypesRegex,
  UniversalPropertiesFile,
  VersionFile,
} from './shared/constants';
import { parseYmlFile } from './shared/utils';

function createConfiguration() {
  const configuration: Configuration = {
    capabilities: parseCapabilities(),
    measurement_types: parseUnitTypes(),
    property_components: parsePropertyComponents(),
    types: parseTypes(),
    universal_properties: parseUniversalProperties(),
    version: parseApiVersion(),
  };

  fs.writeFileSync(ConfigurationFilePath, JSON.stringify(configuration));

  console.log('Successfully created configuration.');
}

function mapStateProps({
  properties,
  state,
}: Capability & { state: 'all' | number[] | undefined }) {
  if (state) {
    return state === 'all' ? properties.map(({ id }) => id) : state;
  }

  return [];
}

function mapTypesToEntity<T extends TypeDefinition>(entity: T) {
  return {
    ...entity,
    ...((CustomTypesRegex.test(entity.type) && {
      customType: entity.type.replace(CustomTypesRegex, ''),
    }) ||
      (UnitTypesRegex.test(entity.type) && {
        unitType: entity.type.replace(UnitTypesRegex, ''),
      })),
  };
}

function parseApiVersion() {
  return parseYmlFile<{ version: number }>(VersionFile).version;
}

function parseCapabilities() {
  return CapabilitiesFileList.reduce<Configuration['capabilities']>(
    (configurationObject, fileName) => {
      const capability = parseYmlFile<Capability>(`${CapabilitiesPath}/${fileName}`);
      return {
        ...configurationObject,
        [capability.name]: {
          ...capability,
          properties: capability.properties.map((property) => mapTypesToEntity(property)),
          state: mapStateProps(capability),
        },
      };
    },
    {},
  );
}

function parsePropertyComponents() {
  return parseYmlFile<{ property_components: PropertyComponents }>(
    PropertyComponentsFile,
  ).property_components.reduce<Configuration['property_components']>(
    (allComponents, component) => ({
      ...allComponents,
      [component.name]: mapTypesToEntity(component),
    }),
    {},
  );
}

function parseTypes() {
  return parseYmlFile<{ types: TypeDefinitions }>(CustomTypesFile).types.reduce<
    Configuration['types']
  >(
    (allTypes, type) => ({
      ...allTypes,
      [type.name]: {
        ...type,
        ...(type.items && { items: type.items.map((item) => mapTypesToEntity(item)) }),
      },
    }),
    {},
  );
}

function parseUnitTypes() {
  return parseYmlFile<{ measurement_types: MeasurementTypes }>(
    UnitTypesFile,
  ).measurement_types.reduce<Configuration['measurement_types']>(
    (allTypes, type) => ({
      ...allTypes,
      [type.name]: type,
    }),
    {},
  );
}

function parseUniversalProperties() {
  return parseYmlFile<{ universal_properties: Properties }>(
    UniversalPropertiesFile,
  ).universal_properties.map((property) => mapTypesToEntity(property));
}

createConfiguration();
