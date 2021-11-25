import { LOAD_WORKERS_DATA, LOAD_WORKERS_DATA_SUCCESS, LOAD_WORKERS_DATA_FAILED } from '../../constants';

const loadWorkersData = (page = 1, filterParameters = {}) => ({
	type: LOAD_WORKERS_DATA,
	payload: {
		page,
		filterParameters,
	},
});

export const loadWorkersDataFailed = (error) => ({
	type: LOAD_WORKERS_DATA_FAILED,
	payload: error,
});

export const loadWorkersDataSuccess = (data) => ({
	type: LOAD_WORKERS_DATA_SUCCESS,
	payload: data,
});

export default loadWorkersData;
