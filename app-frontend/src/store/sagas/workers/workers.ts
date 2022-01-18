import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { Worker } from '../../../types/worker';
import {
  LoadWorkersData,
  LoadWorkersDataActionTypes,
  loadWorkersDataFailed,
  loadWorkersDataSuccess,
} from '../../actions/loadWorkersData/loadWorkersData';
import { handleError } from '../../utils';
import { loadWorkers } from '../api/workers.api';

export function* getWorkersData(action: LoadWorkersData): SagaIterator<void> {
  try {
    const responseData: Worker[] = yield call(loadWorkers, action.payload);

    yield put(loadWorkersDataSuccess(responseData));
  } catch (error: unknown) {
    yield put(loadWorkersDataFailed(handleError(error)));
  }
}
export default function* workersWatcher() {
  yield takeEvery(LoadWorkersDataActionTypes.LOAD_WORKERS_DATA, getWorkersData);
}
