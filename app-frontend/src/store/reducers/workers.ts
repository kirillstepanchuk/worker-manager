import { Worker } from '../../types/worker';
import { LoadWorkersDataActions, LoadWorkersDataActionTypes } from '../actions/loadWorkersData/loadWorkersData';

export interface WorkersState {
  data: Worker[] | null,
  loading: boolean,
  error: boolean,
}

const initialState: WorkersState = {
  data: null,
  loading: false,
  error: false,
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
        error: true,
      };
    default:
      return state;
  }
};

export default workers;
