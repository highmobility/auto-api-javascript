import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { TroubleCode } from '../../../values/custom';

@Descriptor({
  id: 29,
  multiple: true,
  name: 'trouble_codes',
  value: TroubleCode,
})
export class TroubleCodes extends Property<typeof TroubleCode> {}
