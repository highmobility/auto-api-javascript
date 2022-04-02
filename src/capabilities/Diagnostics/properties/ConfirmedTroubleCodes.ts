import { ConfirmedTroubleCode } from '../../../values/custom';
import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 39,
  multiple: true,
  name: 'confirmed_trouble_codes',
  value: ConfirmedTroubleCode,
})
export class ConfirmedTroubleCodes extends Property<typeof ConfirmedTroubleCode> {}
