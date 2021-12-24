import axios, { AxiosResponse } from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadWorkersDataSuccess, loadWorkersDataFailed } from '../actions/loadWorkersData/loadWorkersData';
import { loadWorkerDataSuccess, loadWorkerDataFailed } from '../actions/loadWorkerData/loadWorkerData';
import { addWorkerDataFailed } from '../actions/addWorkerData/addWorkerData';
import { editWorkerDataFailed } from '../actions/editWorkerData/editWorkerData';
import { API_URL } from '../constants';
import {
  Worker,
  WorkerIdAction,
  WorkersFiltrateAction,
  WorkerAddAction,
  WorkerEditAction,
} from '../../types/worker';

export function* loadWorkersData(action: WorkersFiltrateAction) {
  try {
    const { payload } = action;

    const url = new URL(`${API_URL}/workers`);
    url.searchParams.append('pageNumber', payload.page as string);
    url.searchParams.append('positionType', payload.filterParameters.positionType as string);
    url.searchParams.append('sortingType', payload.filterParameters.sortingType as string);
    url.searchParams.append('time', payload.filterParameters.time as string);

    const responseData: AxiosResponse<Worker[]> = yield call(() => axios.get(url.toString())
      .then((response) => response.data));

    yield put(loadWorkersDataSuccess(responseData));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(loadWorkersDataFailed(error.message));
    }
  }
}

export function* loadWorkerData(action: WorkerIdAction) {
  try {
    const responseData:AxiosResponse<Worker> = yield call(() => axios.get(`${API_URL}/workers/${action.id}`).then((response) => response.data));

    yield put(loadWorkerDataSuccess(responseData));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(loadWorkerDataFailed(error.message));
    }
  }
}

export function* addWorkerData(action: WorkerAddAction) {
  try {
    axios({
      method: 'POST',
      url: `${API_URL}/workers`,
      data: action.payload,
      withCredentials: true,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(addWorkerDataFailed(error.message));
    }
  }
}

export function* editWorkerData(action: WorkerEditAction) {
  try {
    axios({
      method: 'PATCH',
      url: `${API_URL}/workers/${action.payload.id}`,
      data: action.payload.workerData,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(editWorkerDataFailed(error.message));
    }
  }
}
