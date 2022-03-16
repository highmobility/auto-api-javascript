import { default as cloneDeep } from 'lodash.clonedeep';
import { default as get } from 'lodash.get';

import {
  Adas,
  Charging,
  ChassisSettings,
  Climate,
  Crash,
  DashboardLights,
  Diagnostics,
  Doors,
  Lights,
  Race,
  Seats,
  Tachograph,
  Trips,
  Usage,
  Windows,
} from '../capabilities';

export const comparePropertyStates = (
  capabilityName: string,
  propertyName: string,
  stateA: Record<string, unknown>,
  stateB: Record<string, unknown>,
  getPropertyKey: (
    capabilityName: string,
    propertyName: string,
  ) => string | undefined = getPropertyDataComponentKey,
) => {
  const key = getPropertyKey(capabilityName, propertyName);

  if (key) {
    return get(stateA, `data.${key}`) === get(stateB, `data.${key}`);
  }

  return false;
};

export const getPropertyDataComponentKey = (capabilityName: string, propertyName: string) => {
  switch (capabilityName) {
    case Adas.Name:
      switch (propertyName) {
        case Adas.Properties.LaneKeepAssistsStates:
        case Adas.Properties.ParkAssists:
          return 'location';
      }
    case Charging.Name:
      switch (propertyName) {
        case Charging.Properties.DepartureTimes:
          return 'state';
        case Charging.Properties.ReductionTimes:
          return 'start_stop';
      }

    case ChassisSettings.Name:
      switch (propertyName) {
        case ChassisSettings.Properties.CurrentSpringRates:
        case ChassisSettings.Properties.MaximumSpringRates:
        case ChassisSettings.Properties.MinimumSpringRates:
          return 'axle';
      }

    case Climate.Name:
      switch (propertyName) {
        case Climate.Properties.HvacWeekdayStartingTimes:
          return 'weekday';
      }

    case Crash.Name:
      switch (propertyName) {
        case Crash.Properties.Incidents:
          return 'location';
      }

    case DashboardLights.Name:
      switch (propertyName) {
        case DashboardLights.Properties.BulbFailures:
          return 'id';
        case DashboardLights.Properties.DashboardLights:
          return 'name';
      }

    case Diagnostics.Name:
      switch (propertyName) {
        case Diagnostics.Properties.DieselExhaustFilterStatus:
          return 'status';

        case Diagnostics.Properties.TirePressures:
        case Diagnostics.Properties.TirePressuresDifferences:
        case Diagnostics.Properties.TirePressureStatuses:
        case Diagnostics.Properties.TirePressuresTargets:
        case Diagnostics.Properties.TireTemperatures:
        case Diagnostics.Properties.WheelRpms:
          return 'location';
      }

    case Doors.Name:
      switch (propertyName) {
        case Doors.Properties.InsideLocks:
        case Doors.Properties.Locks:
        case Doors.Properties.Positions:
          return 'location';
      }

    case Lights.Name:
      switch (propertyName) {
        case Lights.Properties.FogLights:
        case Lights.Properties.InteriorLights:
        case Lights.Properties.ReadingLamps:
          return 'location';
      }

    case Race.Name:
      switch (propertyName) {
        case Race.Properties.Accelerations:
          return 'direction';
        case Race.Properties.BrakeTorqueVectorings:
          return 'axle';
      }

    case Seats.Name:
      switch (propertyName) {
        case Seats.Properties.PersonsDetected:
        case Seats.Properties.SeatbeltsState:
          return 'location';
      }

    case Tachograph.Name:
      switch (propertyName) {
        case Tachograph.Properties.DriversCardsPresent:
        case Tachograph.Properties.DriversWorkingStates:
        case Tachograph.Properties.DriversTimeStates:
          return 'driver_number';
      }

    case Trips.Name:
      switch (propertyName) {
        case Trips.Properties.EndAddressComponents:
        case Trips.Properties.StartAddressComponents:
        case Trips.Properties.Thresholds:
          return 'type';
      }

    case Usage.Name:
      switch (propertyName) {
        case Usage.Properties.DrivingModesActivationPeriods:
        case Usage.Properties.DrivingModesEnergyConsumptions:
          return 'driving_mode';
      }

    case Windows.Name:
      switch (propertyName) {
        case Windows.Properties.OpenPercentages:
        case Windows.Properties.Positions:
          return 'location';
      }
  }
};

export const updatePropertyStates = (
  capabilityName: string,
  propertyName: string,
  stateA: Record<string, unknown> | Record<string, unknown>[] | undefined,
  stateB: Record<string, unknown>,
  strategy: 'merge' | 'replace' = 'merge',
  predicate: typeof comparePropertyStates = comparePropertyStates,
) => {
  const state = cloneDeep(stateA || {});
  const update = (a: Record<string, unknown>, b: Record<string, unknown>) =>
    strategy === 'merge' ? { ...a, ...b } : b;

  if (Array.isArray(state)) {
    const index = state.findIndex((state) =>
      predicate(capabilityName, propertyName, state, stateB),
    );

    if (index >= 0) {
      state[index] = update(state[index], stateB);
    } else {
      state[0] = update(state[0], stateB);
    }

    return state;
  }

  return update(state, stateB);
};
