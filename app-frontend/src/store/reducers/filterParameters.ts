import initialState from '../initialState';
import { SET_FILTER_PARAMETERS } from '../constants';
import { FilterParametersData } from '../../types/filterParameters';
import { WorkerAction } from '../../types/worker';

const filterParameters = (
  state: FilterParametersData = initialState.filterParameters,
  action: WorkerAction,
) => {
  switch (action.type) {
    case SET_FILTER_PARAMETERS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default filterParameters;
