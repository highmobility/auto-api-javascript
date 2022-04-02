import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const BlindSpotWarningSystemCoverageEnumDescriptor = {
  values: {
    regular: 0,
    trailer: 1,
  },
  size: 1,
};

@Descriptor(BlindSpotWarningSystemCoverageEnumDescriptor)
export class BlindSpotWarningSystemCoverageEnum extends Enum<
  keyof typeof BlindSpotWarningSystemCoverageEnumDescriptor.values
> {}

@Descriptor({
  id: 5,
  name: 'blind_spot_warning_system_coverage',
  value: BlindSpotWarningSystemCoverageEnum,
})
export class BlindSpotWarningSystemCoverage extends Property<
  typeof BlindSpotWarningSystemCoverageEnum
> {}
