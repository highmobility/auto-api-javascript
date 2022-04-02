import { CustomType } from '../base/CustomType';
import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const DieselExhaustFilterStatusCleaningDescriptor = {
  values: {
    complete: 2,
    in_progress: 1,
    interrupted: 3,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(DieselExhaustFilterStatusCleaningDescriptor)
export class DieselExhaustFilterStatusCleaning extends Enum<
  keyof typeof DieselExhaustFilterStatusCleaningDescriptor.values
> {}

const DieselExhaustFilterStatusComponentDescriptor = {
  values: {
    diesel_particulate_filter: 2,
    exhaust_filter: 1,
    off_board_regeneration: 4,
    overboost_code_regulator: 3,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(DieselExhaustFilterStatusComponentDescriptor)
export class DieselExhaustFilterStatusComponent extends Enum<
  keyof typeof DieselExhaustFilterStatusComponentDescriptor.values
> {}

const DieselExhaustFilterStatusStatusDescriptor = {
  values: {
    at_limit: 3,
    normal_operation: 1,
    over_limit: 4,
    overloaded: 2,
    unknown: 0,
  },
  size: 1,
};

@Descriptor(DieselExhaustFilterStatusStatusDescriptor)
export class DieselExhaustFilterStatusStatus extends Enum<
  keyof typeof DieselExhaustFilterStatusStatusDescriptor.values
> {}

const DieselExhaustFilterStatusDescriptor = {
  items: {
    cleaning: DieselExhaustFilterStatusCleaning,
    component: DieselExhaustFilterStatusComponent,
    status: DieselExhaustFilterStatusStatus,
  },
  order: ['status', 'component', 'cleaning'],
  size: 3,
};

@Descriptor(DieselExhaustFilterStatusDescriptor)
export class DieselExhaustFilterStatus extends CustomType<
  typeof DieselExhaustFilterStatusDescriptor.items
> {}
