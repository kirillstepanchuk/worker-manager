import axios, { AxiosResponse } from 'axios'
import { put, call } from 'redux-saga/effects'

import { loadWorkersDataSuccess, loadWorkersDataFailed } from '../actions/loadWorkersData/loadWorkersData'
import { loadWorkerDataSuccess, loadWorkerDataFailed } from '../actions/loadWorkerData/loadWorkerData'
import { API_URL } from '../constants'

type workersActionType = {
	type: string,
	payload: {
		page: number,
		filterParameters: {
			positionType?: string,
			sortingType?: string,
			time?: string,
		}
	}
}

type workerActionType = {
	type: string,
	id: string,
}

interface IWorker {
	avatar: string,
	name: string,
	placeNumber?: string,
	positionType: string,
	salary: number,
	time: string,
	__v: number,
	_id: string,
}


export function* loadWorkersData(action: workersActionType) {
	try {
		const { payload } = action

		const responseData:AxiosResponse<IWorker[]> = yield call(() => axios.get(
			`${API_URL}/workers?pageNumber=${payload.page}&positionType=${payload.filterParameters.positionType}&sortingType=${payload.filterParameters.sortingType}&time=${payload.filterParameters.time}`
		).then((response) => response.data))

		yield put(loadWorkersDataSuccess(responseData))
	} catch (error) {
		if (error instanceof Error) {
			yield put(loadWorkersDataFailed(error.message))
		}
	}
}

export function* loadWorkerData(action: workerActionType) {
	try {
		const responseData:AxiosResponse<IWorker> = yield call(() => axios.get(`${API_URL}/workers/${action.id}`).then((response) => response.data))
		console.log('responseData: ', responseData);

		yield put(loadWorkerDataSuccess(responseData))
	} catch (error) {
		if (error instanceof Error) {
			yield put(loadWorkerDataFailed(error.message))
		}
	}
}
