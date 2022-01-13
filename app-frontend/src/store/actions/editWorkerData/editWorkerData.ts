import { WorkerEdit } from '../../../types/worker';

export enum EditWorkerDataActionTypes {
  EDIT_WORKER_DATA = 'EDIT_WORKER_DATA',
  EDIT_WORKER_DATA_SUCCESS = 'EDIT_WORKER_DATA_SUCCESS',
  EDIT_WORKER_DATA_FAILED = 'EDIT_WORKER_DATA_FAILED',
}

export interface EditWorkerData {
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA,
  payload: {
    workerData: WorkerEdit,
    id: string,
  },
}

interface EditWorkerDataSuccess {
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA_SUCCESS,
  payload: {
    workerData: WorkerEdit,
  },
}

interface EditWorkerDataFailed {
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA_FAILED,
  payload: string,
}

export type EditWorkerDataActions = EditWorkerData | EditWorkerDataSuccess | EditWorkerDataFailed;

const editWorkerData = (workerData: WorkerEdit, id: string): EditWorkerData => ({
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA,
  payload: {
    workerData,
    id,
  },
});

export const editWorkerDataSuccess = (workerData: WorkerEdit): EditWorkerDataSuccess => ({
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA_SUCCESS,
  payload: {
    workerData,
  },
});

export const editWorkerDataFailed = (error: string): EditWorkerDataFailed => ({
  type: EditWorkerDataActionTypes.EDIT_WORKER_DATA_FAILED,
  payload: error,
});

export default editWorkerData;
