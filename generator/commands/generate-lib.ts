import { resolve } from 'path';

import { Generator } from '../core/Generator';

new Generator(resolve(__dirname, '../../src'), resolve(__dirname, '../../auto-api')).emitEntities();
