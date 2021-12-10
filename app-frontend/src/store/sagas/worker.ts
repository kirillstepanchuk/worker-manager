import axios, { AxiosResponse } from 'axios'
import { put, call } from 'redux-saga/effects'

import { loadWorkersDataSuccess, loadWorkersDataFailed } from '../actions/loadWorkersData/loadWorkersData'
import { loadWorkerDataSuccess, loadWorkerDataFailed } from '../actions/loadWorkerData/loadWorkerData'
import { API_URL } from '../constants'
import { Worker, WorkerIdAction, WorkersFiltrateAction } from '../../types/worker'

export function * loadWorkersData (action: WorkersFiltrateAction) {
	try {
		const { payload } = action

		const responseData:AxiosResponse<Worker[]> = yield call(() => axios.get(
			`${API_URL}/workers?pageNumber=${payload.page}&positionType=${payload.filterParameters.positionType}&sortingType=${payload.filterParameters.sortingType}&time=${payload.filterParameters.time}`
		).then((response) => response.data))

		yield put(loadWorkersDataSuccess(responseData))
	} catch (error) {
		if (error instanceof Error) {
			yield put(loadWorkersDataFailed(error.message))
		}
	}
}

export function * loadWorkerData (action: WorkerIdAction) {
	try {
		const responseData:AxiosResponse<Worker> = yield call(() => axios.get(`${API_URL}/workers/${action.id}`).then((response) => response.data))

		yield put(loadWorkerDataSuccess(responseData))
	} catch (error) {
		if (error instanceof Error) {
			yield put(loadWorkerDataFailed(error.message))
		}
	}
}
