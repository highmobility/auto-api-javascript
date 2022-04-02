import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const AuthenticationMechanismEnumDescriptor = {
  values: {
    app: 1,
    pin: 0,
  },
  size: 1,
};

@Descriptor(AuthenticationMechanismEnumDescriptor)
export class AuthenticationMechanismEnum extends Enum<
  keyof typeof AuthenticationMechanismEnumDescriptor.values
> {}

@Descriptor({
  id: 2,
  name: 'authentication_mechanism',
  value: AuthenticationMechanismEnum,
})
export class AuthenticationMechanism extends Property<typeof AuthenticationMechanismEnum> {}
