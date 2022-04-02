import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const PreconditioningErrorEnumDescriptor = {
  values: {
    available_after_engine_restart: 3,
    general_error: 4,
    no_change: 0,
    not_possible_finished: 2,
    not_possible_low: 1,
  },
  size: 1,
};

@Descriptor(PreconditioningErrorEnumDescriptor)
export class PreconditioningErrorEnum extends Enum<
  keyof typeof PreconditioningErrorEnumDescriptor.values
> {}

@Descriptor({
  id: 35,
  name: 'preconditioning_error',
  value: PreconditioningErrorEnum,
})
export class PreconditioningError extends Property<typeof PreconditioningErrorEnum> {}
