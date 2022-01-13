import { FilterParameters } from '../../../types/filterParameters';

export enum SetFilterParametersActionTypes {
  SET_FILTER_PARAMETERS = 'SET_FILTER_PARAMETERS',
}

interface SetFilterParameters {
  type: SetFilterParametersActionTypes.SET_FILTER_PARAMETERS,
  payload: FilterParameters,
}

export type SetFilterParametersActions = SetFilterParameters;

const setFilterParameters = (parameters: FilterParameters): SetFilterParameters => ({
  type: SetFilterParametersActionTypes.SET_FILTER_PARAMETERS,
  payload: parameters,
});

export default setFilterParameters;
