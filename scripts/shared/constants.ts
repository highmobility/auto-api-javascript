import fs from 'fs';

import { resolve } from './utils';

export const AutoAPIPath = resolve('../../auto-api');
export const SourcesPath = resolve('../../src');

export const CapabilitiesPath = resolve(AutoAPIPath, 'capabilities');
export const MiscDefinitionsPath = resolve(AutoAPIPath, 'misc');

export const CapabilitiesFileList = fs.readdirSync(CapabilitiesPath).sort();
export const CustomTypesFile = resolve(MiscDefinitionsPath, 'custom_types.yml');
export const EventsFile = resolve(MiscDefinitionsPath, 'events.yml');
export const PropertyComponentsFile = resolve(MiscDefinitionsPath, 'property_components.yml');
export const UnitTypesFile = resolve(MiscDefinitionsPath, 'unit_types.yml');
export const UniversalPropertiesFile = resolve(MiscDefinitionsPath, 'universal_properties.yml');
export const VersionFile = resolve(MiscDefinitionsPath, 'version.yml');

export const CapabilityClassesPath = resolve(SourcesPath, 'capabilities');
export const ConfigurationFilePath = resolve(SourcesPath, 'configuration/configuration.json');
export const PropertyComponentsClassesPath = resolve(SourcesPath, 'components');

export const ConfigurationClassName = 'Configuration';
export const CapabilityBaseClassName = 'Capability';
export const PropertyTypeName = 'Property';

export const EventsRegex = new RegExp(`events.`);
export const CustomTypesRegex = new RegExp(`types.`);
export const UnitTypesRegex = new RegExp(`unit.`);
