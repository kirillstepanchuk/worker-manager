import initialState from '../initialState'
import { SET_FILTER_PARAMETERS } from '../constants'

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

type IFilterParameters = {
	data: {
		positionType?: string,
		sortingType?: string,
		time?: string,
	}
}

type Action = {
	type: string,
	payload?: IWorker[]
}

const filterParameters = (state: IFilterParameters = initialState.filterParameters, action: Action) => {
	switch (action.type) {
	case SET_FILTER_PARAMETERS:
		return {
			data: action.payload
		}
	default:
		return state
	}
}

export default filterParameters
