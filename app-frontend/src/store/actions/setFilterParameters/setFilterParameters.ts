import { SET_FILTER_PARAMETERS } from '../../constants';
import { FilterParameters } from '../../../types/filterParameters';

const setFilterParameters = (filterParameters: FilterParameters) => ({
  type: SET_FILTER_PARAMETERS,
  payload: filterParameters,
});

export default setFilterParameters;
