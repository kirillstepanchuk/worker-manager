import initialState from '../initialState';
import {
  LOAD_WORKER_DATA_SUCCESS,
  EDIT_WORKER_STATE,
  ADD_WORKER_DATA_SUCCESS,
  EDIT_WORKER_DATA_SUCCESS,
} from '../constants';
import { WorkerEditData, WorkerAction } from '../../types/worker';

const worker = (state: WorkerEditData = initialState.worker, action: WorkerAction) => {
  switch (action.type) {
    case LOAD_WORKER_DATA_SUCCESS:
      return {
        data: action.payload,
      };
    case ADD_WORKER_DATA_SUCCESS:
      return {
        data: action.payload,
      };
    case EDIT_WORKER_DATA_SUCCESS:
      return {
        data: action.payload,
      };
    case EDIT_WORKER_STATE:
      return {
        data: { ...state.data, ...action.payload },
      };
    default:
      return state;
  }
};

export default worker;
