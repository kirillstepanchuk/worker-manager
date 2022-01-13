import { Worker } from '../../types/worker';
import { LoadWorkersDataActions, LoadWorkersDataActionTypes } from '../actions/loadWorkersData/loadWorkersData';

export interface WorkersState {
  data: Worker[],
  loading: boolean,
  error: string,
}

const initialState: WorkersState = {
  data: [],
  loading: false,
  error: '',
};

type WorkersActionTypes = LoadWorkersDataActions;

const workers = (state: WorkersState = initialState, action: WorkersActionTypes): WorkersState => {
  switch (action.type) {
    case LoadWorkersDataActionTypes.LOAD_WORKERS_DATA:
      return {
        ...state,
        loading: true,
      };
    case LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workers;
