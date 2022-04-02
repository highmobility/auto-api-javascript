import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { Temperature } from '../../../values/units';

@Descriptor({
  id: 2,
  name: 'engine_oil_temperature',
  value: Temperature,
})
export class EngineOilTemperature extends Property<typeof Temperature> {}
