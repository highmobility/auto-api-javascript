import { CustomType } from '../base/CustomType';
import { Descriptor, Size } from '../../decorators';
import { Double } from '../base/Double';

@Size(8)
export class CoordinatesLatitude extends Double {}

@Size(8)
export class CoordinatesLongitude extends Double {}

const CoordinatesDescriptor = {
  items: {
    latitude: CoordinatesLatitude,
    longitude: CoordinatesLongitude,
  },
  order: ['latitude', 'longitude'],
  size: 16,
};

@Descriptor(CoordinatesDescriptor)
export class Coordinates extends CustomType<typeof CoordinatesDescriptor.items> {}
