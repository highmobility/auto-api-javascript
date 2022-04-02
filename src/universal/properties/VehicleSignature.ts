import { Bytes } from '../../values/base/Bytes';
import { Descriptor } from '../../decorators';
import { Property } from '../../core/Property';

export class VehicleSignatureBytes extends Bytes {}

@Descriptor({
  id: 161,
  name: 'vehicle_signature',
  value: VehicleSignatureBytes,
})
export class VehicleSignature extends Property<typeof VehicleSignatureBytes> {}
