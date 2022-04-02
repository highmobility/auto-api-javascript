import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const FrontExteriorLightEnumDescriptor = {
  values: {
    active: 1,
    active_with_full_beam: 2,
    automatic: 4,
    drl: 3,
    inactive: 0,
  },
  size: 1,
};

@Descriptor(FrontExteriorLightEnumDescriptor)
export class FrontExteriorLightEnum extends Enum<
  keyof typeof FrontExteriorLightEnumDescriptor.values
> {
  public activate() {
    this.setValue('active');
    return this;
  }
  public activateDrl() {
    this.setValue('drl');
    return this;
  }
  public activateWithFullBeam() {
    this.setValue('active_with_full_beam');
    return this;
  }
  public deactivate() {
    this.setValue('inactive');
    return this;
  }
}

@Descriptor({
  id: 1,
  name: 'front_exterior_light',
  value: FrontExteriorLightEnum,
})
export class FrontExteriorLight extends Property<typeof FrontExteriorLightEnum> {}
