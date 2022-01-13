import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import workers from './workers';
import worker from './worker';
import filterParameters from './filterParameters';

export const history = createBrowserHistory();

const root = combineReducers({
  router: connectRouter(history),
  workers,
  worker,
  filterParameters,
});

export default root;
