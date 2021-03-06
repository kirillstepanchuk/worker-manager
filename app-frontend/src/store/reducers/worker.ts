import { LoadWorkerDataActions, LoadWorkerDataActionTypes } from '../actions/loadWorkerData/loadWorkerData';
import { AddWorkerDataActions, AddWorkerDataActionTypes } from '../actions/addWorkerData/addWorkerData';
import { EditWorkerDataActions, EditWorkerDataActionTypes } from '../actions/editWorkerData/editWorkerData';
import { EditWorkerStateActions, EditWorkerStateActionTypes } from '../actions/editWorkerState/editWorkerState';
import { WorkerData, WorkerEdit, WorkerEditData } from '../../types/worker';

export interface WorkerState {
  data: WorkerData | WorkerEdit | WorkerEditData | null,
  loading: boolean,
  error: boolean,
}

export const initialState: WorkerState = {
  data: null,
  loading: false,
  error: false,
};

type WorkerActionTypes =
  LoadWorkerDataActions |
  AddWorkerDataActions |
  EditWorkerDataActions |
  EditWorkerStateActions;

const worker = (state: WorkerState = initialState, action: WorkerActionTypes): WorkerState => {
  switch (action.type) {
    case LoadWorkerDataActionTypes.LOAD_WORKER_DATA:
      return {
        ...state,
        loading: true,
      };
    case LoadWorkerDataActionTypes.LOAD_WORKER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LoadWorkerDataActionTypes.LOAD_WORKER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case AddWorkerDataActionTypes.ADD_WORKER_DATA:
      return {
        ...state,
        loading: true,
      };
    case AddWorkerDataActionTypes.ADD_WORKER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case AddWorkerDataActionTypes.ADD_WORKER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case EditWorkerDataActionTypes.EDIT_WORKER_DATA:
      return {
        ...state,
        loading: true,
      };
    case EditWorkerDataActionTypes.EDIT_WORKER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case EditWorkerDataActionTypes.EDIT_WORKER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case EditWorkerStateActionTypes.EDIT_WORKER_STATE:
      return {
        data: { ...state.data, ...action.payload },
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default worker;
