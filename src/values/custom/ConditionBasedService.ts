import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Enum } from '../base/Enum';
import { String } from '../base/String';
import { UInteger } from '../base/UInteger';

export class ConditionBasedServiceDescription extends String {}

const ConditionBasedServiceDueStatusDescriptor = {
  values: {
    ok: 0,
    overdue: 2,
    pending: 1,
  },
  size: 1,
};

@Descriptor(ConditionBasedServiceDueStatusDescriptor)
export class ConditionBasedServiceDueStatus extends Enum<
  keyof typeof ConditionBasedServiceDueStatusDescriptor.values
> {}

@Size(2)
export class ConditionBasedServiceId extends UInteger {}

@Size(1)
export class ConditionBasedServiceMonth extends UInteger {}

export class ConditionBasedServiceText extends String {}

@Size(2)
export class ConditionBasedServiceYear extends UInteger {}

const ConditionBasedServiceDescriptor = {
  items: {
    description: ConditionBasedServiceDescription,
    due_status: ConditionBasedServiceDueStatus,
    id: ConditionBasedServiceId,
    month: ConditionBasedServiceMonth,
    text: ConditionBasedServiceText,
    year: ConditionBasedServiceYear,
  },
  order: ['year', 'month', 'id', 'due_status', 'text', 'description'],
};

@Descriptor(ConditionBasedServiceDescriptor)
export class ConditionBasedService extends CustomType<
  typeof ConditionBasedServiceDescriptor.items
> {}
