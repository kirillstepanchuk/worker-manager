import { combineReducers } from 'redux';

import workers from './workers';
import worker from './worker';
import filterParameters from './filterParameters';

const root = combineReducers({
  workers,
  worker,
  filterParameters,
});

export default root;
