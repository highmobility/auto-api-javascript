import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const EngineOilPressureLevelEnumDescriptor = {
  values: {
    high: 2,
    low: 0,
    low_hard: 4,
    low_soft: 3,
    no_sensor: 5,
    normal: 1,
    system_fault: 6,
  },
  size: 1,
};

@Descriptor(EngineOilPressureLevelEnumDescriptor)
export class EngineOilPressureLevelEnum extends Enum<
  keyof typeof EngineOilPressureLevelEnumDescriptor.values
> {}

@Descriptor({
  id: 52,
  name: 'engine_oil_pressure_level',
  value: EngineOilPressureLevelEnum,
})
export class EngineOilPressureLevel extends Property<typeof EngineOilPressureLevelEnum> {}
