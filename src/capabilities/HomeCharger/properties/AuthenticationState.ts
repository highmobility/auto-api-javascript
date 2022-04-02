import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const AuthenticationStateEnumDescriptor = {
  values: {
    authenticated: 1,
    unauthenticated: 0,
  },
  size: 1,
};

@Descriptor(AuthenticationStateEnumDescriptor)
export class AuthenticationStateEnum extends Enum<
  keyof typeof AuthenticationStateEnumDescriptor.values
> {
  public authenticate() {
    this.setValue('authenticated');
    return this;
  }
  public expireAuthentication() {
    this.setValue('unauthenticated');
    return this;
  }
}

@Descriptor({
  id: 13,
  name: 'authentication_state',
  value: AuthenticationStateEnum,
})
export class AuthenticationState extends Property<typeof AuthenticationStateEnum> {}
