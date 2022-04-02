import { Descriptor } from '../../../decorators';
import { Enum } from '../../../values/base/Enum';
import { Property } from '../../../core/Property';

const SportChronoEnumDescriptor = {
  values: {
    active: 1,
    inactive: 0,
    reset: 2,
  },
  size: 1,
};

@Descriptor(SportChronoEnumDescriptor)
export class SportChronoEnum extends Enum<keyof typeof SportChronoEnumDescriptor.values> {
  public start() {
    this.setValue('active');
    return this;
  }
  public stop() {
    this.setValue('inactive');
    return this;
  }
}

@Descriptor({
  id: 2,
  name: 'sport_chrono',
  value: SportChronoEnum,
})
export class SportChrono extends Property<typeof SportChronoEnum> {}
