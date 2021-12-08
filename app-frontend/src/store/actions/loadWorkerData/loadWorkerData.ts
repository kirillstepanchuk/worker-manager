import { LOAD_WORKER_DATA, LOAD_WORKER_DATA_SUCCESS, LOAD_WORKER_DATA_FAILED } from '../../constants'

interface IWorker {
	data: {
		avatar: string,
		name: string,
		placeNumber?: string,
		positionType: string,
		salary: number,
		time: string,
		__v: number,
		_id: string,
	}
}

const loadWorkerData = (id: string) => ({
	type: LOAD_WORKER_DATA,
	id
})

export const loadWorkerDataFailed = (error: string) => ({
	type: LOAD_WORKER_DATA_FAILED,
	payload: error
})

export const loadWorkerDataSuccess = (data: IWorker) => ({
	type: LOAD_WORKER_DATA_SUCCESS,
	payload: data
})

export default loadWorkerData
