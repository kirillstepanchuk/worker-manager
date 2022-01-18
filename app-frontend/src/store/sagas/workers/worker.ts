import { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';

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

export function* loadWorkerData(action: LoadWorkerData) {
  try {
    const responseData: AxiosResponse<Worker> = yield call(loadWorker, action.payload.id);

    yield put(loadWorkerDataSuccess(responseData));
  } catch (error: unknown) {
    yield put(loadWorkerDataFailed(handleError(error)));
  }
}

export function* addWorkerData(action: AddWorkerData) {
  try {
    const data: WorkerData = yield call(addWorker, action.payload);

    yield put(addWorkerDataSuccess(data));
    yield put(goBack());
  } catch (error: unknown) {
    yield put(addWorkerDataFailed(handleError(error)));
  }
}

export function* editWorkerData(action: EditWorkerData) {
  try {
    const data: WorkerEdit = yield call(editWorker, action);

    yield put(editWorkerDataSuccess(data));
    yield put(goBack());
  } catch (error: unknown) {
    yield put(editWorkerDataFailed(handleError(error)));
  }
}

export default function* workerWatcher() {
  yield takeEvery(LoadWorkerDataActionTypes.LOAD_WORKER_DATA, loadWorkerData);
  yield takeEvery(AddWorkerDataActionTypes.ADD_WORKER_DATA, addWorkerData);
  yield takeEvery(EditWorkerDataActionTypes.EDIT_WORKER_DATA, editWorkerData);
}
