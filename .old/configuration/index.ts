import { Configuration } from '../types';

import json from './configuration.json';

// TODO Could be frozen?
export const configuration: Readonly<Configuration> = json;
