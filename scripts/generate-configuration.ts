import fs from 'fs';

import {
  Capability,
  Configuration,
  MeasurementTypes,
  Properties,
  Property,
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
  EventsFile,
  EventsRegex,
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
    events: parseEvents(),
    measurement_types: parseUnitTypes(),
    property_components: parsePropertyComponents(),
    types: parseTypes(),
    universal_properties: parseUniversalProperties(),
    version: parseApiVersion(),
  };

  fs.writeFileSync(ConfigurationFilePath, JSON.stringify(configuration));

  console.log('Successfully created configuration.');
}

export const getPropertyIdentityKey = (capabilityName: string) => (propertyName: string) => {
  switch (capabilityName) {
    case 'adas':
      switch (propertyName) {
        case 'lane_keep_assists_states':
        case 'park_assists':
          return 'location';
      }

    case 'charging':
      switch (propertyName) {
        case 'departure_times':
          return 'state';
        case 'reduction_times':
          return 'start_stop';
      }

    case 'chassis_settings':
      switch (propertyName) {
        case 'current_spring_rates':
        case 'maximum_spring_rates':
        case 'minimum_spring_rates':
          return 'axle';
      }

    case 'climate':
      switch (propertyName) {
        case 'hvac_weekday_starting_times':
          return 'weekday';
      }

    case 'crash':
      switch (propertyName) {
        case 'incidents':
          return 'location';
      }

    case 'dashboard_lights':
      switch (propertyName) {
        case 'bulb_failures':
          return 'id';
        case 'dashboard_lights':
          return 'name';
      }

    case 'diagnostics':
      switch (propertyName) {
        case 'diesel_exhaust_filter_status':
          return 'status';

        case 'tire_pressures':
        case 'tire_pressures_differences':
        case 'tire_pressure_statuses':
        case 'tire_pressures_targets':
        case 'tire_temperatures':
        case 'wheel_rpms':
          return 'location';
      }

    case 'doors':
      switch (propertyName) {
        case 'inside_locks':
        case 'locks':
        case 'positions':
          return 'location';
      }

    case 'lights':
      switch (propertyName) {
        case 'fog_lights':
        case 'interior_lights':
        case 'reading_lamps':
          return 'location';
      }

    case 'maintenance':
      switch (propertyName) {
        case 'brakes_service_due_dates':
        case 'brakes_service_remaining_distances':
        case 'brakes_service_statuses':
          return 'axle';
      }

    case 'race':
      switch (propertyName) {
        case 'accelerations':
          return 'direction';
        case 'brake_torque_vectorings':
          return 'axle';
      }

    case 'seats':
      switch (propertyName) {
        case 'persons_detected':
        case 'seatbelts_state':
          return 'location';
      }

    case 'tachograph':
      switch (propertyName) {
        case 'drivers_cards_present':
        case 'drivers_working_states':
        case 'drivers_time_states':
          return 'driver_number';
      }

    case 'trips':
      switch (propertyName) {
        case 'end_address_components':
        case 'start_address_components':
        case 'thresholds':
          return 'type';
      }

    case 'usage':
      switch (propertyName) {
        case 'driving_modes_activation_periods':
        case 'driving_modes_energy_consumptions':
          return 'driving_mode';
      }

    case 'windows':
      switch (propertyName) {
        case 'open_percentages':
        case 'positions':
          return 'location';
      }
  }
};

function mapStateProps({
  properties,
  state,
}: Capability & { state: 'all' | number[] | undefined }) {
  if (state) {
    return state === 'all' ? properties.map(({ id }) => id) : state;
  }

  return [];
}

function mapPropertyIdentityKeys(identityKeyFn: (name: string) => string | undefined) {
  return function (property: Property) {
    const key = identityKeyFn(property.name);
    if (key) {
      return {
        ...property,
        identity_key: key,
      };
    }

    return property;
  };
}

function mapTypesToEntity<T extends TypeDefinition>(entity: T) {
  switch (entity.type) {
    case 'double':
      entity.size = entity.size || 8;
      break;

    case 'enum':
      entity.size = entity.size || 1;
      break;

    case 'float':
      entity.size = entity.size || 4;
      break;

    case 'integer':
    case 'uinteger':
      entity.size = entity.size || 1;
      break;

    case 'timestamp':
      entity.size = entity.size || 8;
      break;

    default: {
      if (CustomTypesRegex.test(entity.type)) {
        entity.customType = entity.type.replace(CustomTypesRegex, '');
        break;
      }

      if (EventsRegex.test(entity.type)) {
        entity.event = entity.type.replace(EventsRegex, '');
        break;
      }

      if (UnitTypesRegex.test(entity.type)) {
        entity.unitType = entity.type.replace(UnitTypesRegex, '');
        entity.size = entity.size || 10;
      }

      break;
    }
  }

  return entity;
}

function parseApiVersion() {
  return parseYmlFile<{ version: number }>(VersionFile).version;
}

function parseCapabilities() {
  return CapabilitiesFileList.reduce<Configuration['capabilities']>(
    (configurationObject, fileName) => {
      const capability = parseYmlFile<Capability>(`${CapabilitiesPath}/${fileName}`);
      const identityKeyFn = getPropertyIdentityKey(capability.name);

      return {
        ...configurationObject,
        [capability.name]: {
          ...capability,
          properties: capability.properties
            .map(mapTypesToEntity)
            .map(mapPropertyIdentityKeys(identityKeyFn)),
          state: mapStateProps(capability),
        },
      };
    },
    {},
  );
}

function parseEvents() {
  return parseYmlFile<{ events: TypeDefinitions }>(EventsFile).events.reduce<
    Configuration['events']
  >(
    (allEvents, event) => ({
      ...allEvents,
      [event.name]: {
        ...event,
        ...(event.items && { items: event.items.map((event) => mapTypesToEntity(event)) }),
      },
    }),
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
