import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class ModelNameString extends String {}

@Descriptor({
  id: 3,
  name: 'model_name',
  value: ModelNameString,
})
export class ModelName extends Property<typeof ModelNameString> {}
