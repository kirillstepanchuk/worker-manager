import { LOAD_WORKERS_DATA, LOAD_WORKERS_DATA_SUCCESS, LOAD_WORKERS_DATA_FAILED } from '../../constants'
import { WorkersData } from '../../../types/worker'
import { FilterParameters } from '../../../types/filterParameters'

const loadWorkersData = (page = 1, filterParameters:FilterParameters = {}) => ({
	type: LOAD_WORKERS_DATA,
	payload: {
		page,
		filterParameters
	}
})

export const loadWorkersDataFailed = (error: string) => ({
	type: LOAD_WORKERS_DATA_FAILED,
	payload: error
})

export const loadWorkersDataSuccess = (data: WorkersData) => ({
	type: LOAD_WORKERS_DATA_SUCCESS,
	payload: data
})

export default loadWorkersData
