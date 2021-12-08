import { SET_FILTER_PARAMETERS } from '../../constants'

interface IFilterParameters {
	positionType?: string, 
	sortingType?: string, 
	time?: string
}

const setFilterParameters = (filterParameters: IFilterParameters) => ({
	type: SET_FILTER_PARAMETERS,
	payload: filterParameters
})

export default setFilterParameters
