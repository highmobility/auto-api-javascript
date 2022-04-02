import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { String } from '../../../values/base/String';

export class ImageUrlString extends String {}

@Descriptor({
  id: 1,
  name: 'image_url',
  value: ImageUrlString,
})
export class ImageUrl extends Property<typeof ImageUrlString> {}
