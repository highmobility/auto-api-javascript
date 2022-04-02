import { Capability } from '../../core/Capability';
import { Descriptor } from '../../decorators';

import { CapabilityId } from './properties/CapabilityId';
import { EndDate } from './properties/EndDate';
import { StartDate } from './properties/StartDate';
import { States } from './properties/States';

enum Properties {
  CapabilityId = 'capability_id',
  EndDate = 'end_date',
  StartDate = 'start_date',
  States = 'states',
}

const HistoricalDescriptor = {
  category: 'api_structure',
  identifier: [0, 18],
  name: 'historical',
  prettyName: 'Historical',
  properties: {
    capability_id: CapabilityId,
    end_date: EndDate,
    start_date: StartDate,
    states: States,
  },
  state: [States],
};

@Descriptor(HistoricalDescriptor)
export class Historical extends Capability<typeof HistoricalDescriptor.properties> {
  public static Name = HistoricalDescriptor.name;
  public static Properties = Properties;
}
