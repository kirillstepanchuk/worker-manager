import { SET_FILTER_PARAMETERS } from '../../constants';

const setFilterParameters = (filterParameters) => ({
  type: SET_FILTER_PARAMETERS,
  payload: filterParameters,
});

export default setFilterParameters;
