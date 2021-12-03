import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadWorkersDataSuccess, loadWorkersDataFailed } from '../actions/loadWorkersData/loadWorkersData';
import { loadWorkerDataSuccess, loadWorkerDataFailed } from '../actions/loadWorkerData/loadWorkerData';
import { API_URL } from '../constants';

export function* loadWorkersData(action) {
  try {
    const { payload } = action;

    const responseData = yield call(() => axios.get(
      `${API_URL}/workers?pageNumber=${payload.page}&positionType=${payload.filterParameters.positionType}&sortingType=${payload.filterParameters.sortingType}&time=${payload.filterParameters.time}`,
    ).then((response) => response.data));

    yield put(loadWorkersDataSuccess(responseData));
  } catch (error) {
    yield put(loadWorkersDataFailed(error));
  }
}

export function* loadWorkerData(action) {
  try {
    const responseData = yield call(() => axios.get(`${API_URL}/workers/${action.id}`).then((response) => response.data));

    yield put(loadWorkerDataSuccess(responseData));
  } catch (error) {
    yield put(loadWorkerDataFailed(error));
  }
}
