import initialState from '../initialState'
import { LOAD_WORKERS_DATA_SUCCESS } from '../constants'
import { WorkersData, WorkerAction } from '../../types/worker'

const workers = (state: WorkersData = initialState.workers, action: WorkerAction) => {
	switch (action.type) {
	case LOAD_WORKERS_DATA_SUCCESS:
		return {
			data: action.payload
		}
	default:
		return state
	}
}

export default workers
