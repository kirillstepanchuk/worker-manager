import { put, call, takeEvery } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';

import {
  LoadWorkerData,
  loadWorkerDataSuccess,
  loadWorkerDataFailed,
  LoadWorkerDataActionTypes,
} from '../../actions/loadWorkerData/loadWorkerData';
import {
  AddWorkerData,
  addWorkerDataSuccess,
  addWorkerDataFailed,
  AddWorkerDataActionTypes,
} from '../../actions/addWorkerData/addWorkerData';
import {
  EditWorkerData,
  EditWorkerDataActionTypes,
  editWorkerDataFailed,
  editWorkerDataSuccess,
} from '../../actions/editWorkerData/editWorkerData';
import {
  Worker,
  WorkerEdit,
  WorkerData,
} from '../../../types/worker';
import { loadWorker, addWorker, editWorker } from '../api/worker.api';
import { handleError } from '../../utils';

export function* getWorkerData(action: LoadWorkerData): SagaIterator<void> {
  try {
    const responseData: Worker = yield call(loadWorker, action.payload.id);

    yield put(loadWorkerDataSuccess(responseData));
  } catch (error: unknown) {
    yield put(loadWorkerDataFailed(handleError(error)));
  }
}

export function* appendWorkerData(action: AddWorkerData): SagaIterator<void> {
  try {
    const data: WorkerData = yield call(addWorker, action.payload);

    yield put(addWorkerDataSuccess(data));
    yield put(goBack());
  } catch (error: unknown) {
    yield put(addWorkerDataFailed(handleError(error)));
  }
}

export function* changeWorkerData(action: EditWorkerData): SagaIterator<void> {
  try {
    const data: WorkerEdit = yield call(editWorker, action);

    yield put(editWorkerDataSuccess(data));
    yield put(goBack());
  } catch (error: unknown) {
    yield put(editWorkerDataFailed(handleError(error)));
  }
}

export default function* workerWatcher() {
  yield takeEvery(LoadWorkerDataActionTypes.LOAD_WORKER_DATA, getWorkerData);
  yield takeEvery(AddWorkerDataActionTypes.ADD_WORKER_DATA, appendWorkerData);
  yield takeEvery(EditWorkerDataActionTypes.EDIT_WORKER_DATA, changeWorkerData);
}
