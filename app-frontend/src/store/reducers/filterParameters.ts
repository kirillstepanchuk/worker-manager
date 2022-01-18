import { FilterParameters } from '../../types/filterParameters';
import { SetFilterParametersActions, SetFilterParametersActionTypes } from '../actions/setFilterParameters/setFilterParameters';

export interface FilterParametersState {
  data: FilterParameters
}

export const initialState: FilterParametersState = {
  data: null,
};

type FilterParametersActionTypes = SetFilterParametersActions;

const filterParameters = (
  state: FilterParametersState = initialState,
  action: FilterParametersActionTypes,
): FilterParametersState => {
  switch (action.type) {
    case SetFilterParametersActionTypes.SET_FILTER_PARAMETERS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default filterParameters;
