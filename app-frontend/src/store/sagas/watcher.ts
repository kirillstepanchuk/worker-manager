import { takeEvery } from 'redux-saga/effects'

import { LOAD_WORKERS_DATA, LOAD_WORKER_DATA } from '../constants'
import { loadWorkersData, loadWorkerData } from './worker'

export default function * sagaWatcher () {
	yield takeEvery(LOAD_WORKERS_DATA, loadWorkersData)
	yield takeEvery(LOAD_WORKER_DATA, loadWorkerData)
}
