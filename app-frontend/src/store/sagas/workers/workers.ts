import { call, put, takeEvery } from 'redux-saga/effects';

import { Worker } from '../../../types/worker';
import {
  LoadWorkersData,
  LoadWorkersDataActionTypes,
  loadWorkersDataFailed,
  loadWorkersDataSuccess,
} from '../../actions/loadWorkersData/loadWorkersData';
import handleError from '../../utils';
import loadWorkers from '../api/workers.api';

export function* loadWorkersData(action: LoadWorkersData) {
  try {
    const responseData: Worker[] = yield call(loadWorkers, action.payload);

    yield put(loadWorkersDataSuccess(responseData));
  } catch (error: unknown) {
    yield put(loadWorkersDataFailed(handleError(error)));
  }
}
export default function* workersWatcher() {
  yield takeEvery(LoadWorkersDataActionTypes.LOAD_WORKERS_DATA, loadWorkersData);
}
