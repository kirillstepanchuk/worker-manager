import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadWorkersDataSuccess, loadWorkersDataFailed } from '../actions/loadWorkersData/loadWorkersData';
import { loadWorkerDataSuccess, loadWorkerDataFailed } from '../actions/loadWorkerData/loadWorkerData';
import { API_URL } from '../constants';

export function* loadWorkersData(action) {
  try {
    const { payload } = action;

    const url = new URL(`${API_URL}/workers`);
    url.searchParams.append('pageNumber', payload.page);
    url.searchParams.append('positionType', payload.filterParameters.positionType);
    url.searchParams.append('sortingType', payload.filterParameters.sortingType);
    url.searchParams.append('time', payload.filterParameters.time);

    const responseData = yield call(() => axios.get(url.toString())
      .then((response) => response.data));

    yield put(loadWorkersDataSuccess(responseData));
  } catch (error) {
    yield put(loadWorkersDataFailed(error));
  }
}

export function* loadWorkerData(action) {
  try {
    const responseData = yield call(() => axios.get(`${API_URL}/workers/${action.id}`)
      .then((response) => response.data));

    yield put(loadWorkerDataSuccess(responseData));
  } catch (error) {
    yield put(loadWorkerDataFailed(error));
  }
}
