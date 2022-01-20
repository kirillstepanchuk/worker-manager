import { all } from 'redux-saga/effects';

import workerWatcher from './workers/worker';
import workersWatcher from './workers/workers';

export default function* sagaWatcher() {
  yield all([
    workerWatcher(),
    workersWatcher(),
  ]);
}
