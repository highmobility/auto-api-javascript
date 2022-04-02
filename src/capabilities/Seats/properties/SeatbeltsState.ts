import { Descriptor } from '../../../decorators';
import { Property } from '../../../core/Property';
import { SeatbeltState } from '../../../values/custom';

@Descriptor({
  id: 3,
  multiple: true,
  name: 'seatbelts_state',
  value: SeatbeltState,
})
export class SeatbeltsState extends Property<typeof SeatbeltState> {}
