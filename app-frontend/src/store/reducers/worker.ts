import { LoadWorkerDataActions, LoadWorkerDataActionTypes } from '../actions/loadWorkerData/loadWorkerData';
import { AddWorkerDataActions, AddWorkerDataActionTypes } from '../actions/addWorkerData/addWorkerData';
import { EditWorkerDataActions, EditWorkerDataActionTypes } from '../actions/editWorkerData/editWorkerData';
import { EditWorkerStateActions, EditWorkerStateActionTypes } from '../actions/editWorkerState/editWorkerState';
import { WorkerData, WorkerEdit, WorkerEditData } from '../../types/worker';

interface WorkerState {
  data: WorkerData | WorkerEdit | WorkerEditData,
  loading: boolean,
  error: string,
}
const initialState: WorkerState = {
  data: {},
  loading: false,
  error: '',
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
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
      };
    case EditWorkerStateActionTypes.EDIT_WORKER_STATE:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    default:
      return state;
  }
};

export default worker;
