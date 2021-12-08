import { EDIT_WORKER_DATA } from '../../constants'

interface IWorker {
	workerData: {
		avatar?: string,
		name?: string,
		placeNumber?: string,
		positionType?: string,
		salary?: number,
		time?: string,
	}
}

const editWorkerData = (workerData: IWorker) => ({
	type: EDIT_WORKER_DATA,
	payload: workerData
})

export default editWorkerData
