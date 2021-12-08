import { LOAD_WORKERS_DATA, LOAD_WORKERS_DATA_SUCCESS, LOAD_WORKERS_DATA_FAILED } from '../../constants'

type filterParameters = {
	positionType?: string,
	sortingType?: string,
	time?: string,
}

interface IWorkers {
	data: {
		avatar: string,
		name: string,
		placeNumber?: string,
		positionType: string,
		salary: number,
		time: string,
		__v: number,
		_id: string,
	}[]	
}


const loadWorkersData = (page:number = 1, filterParameters:filterParameters = {}) => ({
	type: LOAD_WORKERS_DATA,
	payload: {
		page,
		filterParameters
	}
})

export const loadWorkersDataFailed = (error: string) => {
	return {
		type: LOAD_WORKERS_DATA_FAILED,
		payload: error
	}
}

export const loadWorkersDataSuccess = (data: IWorkers) => ({
	type: LOAD_WORKERS_DATA_SUCCESS,
	payload: data
})

export default loadWorkersData
