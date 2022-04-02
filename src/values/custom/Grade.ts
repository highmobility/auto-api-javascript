import { Descriptor } from '../../decorators';
import { Enum } from '../base/Enum';

const GradeDescriptor = {
  values: {
    excellent: 0,
    normal: 1,
    warning: 2,
  },
  size: 1,
};

@Descriptor(GradeDescriptor)
export class Grade extends Enum<keyof typeof GradeDescriptor.values> {}
