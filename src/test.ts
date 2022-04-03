console.log('start');

import { Doors } from './capabilities/Doors/Doors';
import { InsideLocksState } from './capabilities/Doors/properties/InsideLocksState';
import { Locks } from './capabilities/Doors/properties/Locks';
import { Location, LockState } from './values/custom';

console.log('imports');

const doors = new Doors();
doors.addProperty('locks', {
  location: new Location('front_left'),
  lock_state: new LockState('locked').unlock(),
});

doors.addProperty('inside_locks_state', new InsideLocksState('locked'));
doors.addProperty('locks_state', 'unlocked');

const locks = doors.getProperty('locks');
(locks as Locks[])[0].data!.value = {
  location: 'rear_left',
  lock_state: 'unlocked',
};

console.log(JSON.stringify(doors, null, 2));

console.log('end');
