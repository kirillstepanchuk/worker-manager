import initialState from '../initialState'
import { SET_FILTER_PARAMETERS } from '../constants'

const filterParameters = (state = initialState.filterParameters, action = {}) => {
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
