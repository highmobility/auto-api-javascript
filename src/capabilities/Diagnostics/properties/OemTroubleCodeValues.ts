import { Descriptor } from '../../../decorators';
import { OemTroubleCodeValue } from '../../../values/custom';
import { Property } from '../../../core/Property';

@Descriptor({
  id: 36,
  multiple: true,
  name: 'oem_trouble_code_values',
  value: OemTroubleCodeValue,
})
export class OemTroubleCodeValues extends Property<typeof OemTroubleCodeValue> {}
