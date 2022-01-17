import { WorkerData } from '../../../types/worker';

export enum LoadWorkerDataActionTypes {
  LOAD_WORKER_DATA = 'LOAD_WORKER_DATA',
  LOAD_WORKER_DATA_SUCCESS = 'LOAD_WORKER_DATA_SUCCESS',
  LOAD_WORKER_DATA_FAILED = 'LOAD_WORKER_DATA_FAILED',
}

export interface LoadWorkerData {
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA,
  payload: {
    id: string
  },
}

interface LoadWorkerDataSuccess {
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA_SUCCESS,
  payload: WorkerData,
}

interface LoadWorkerDataFailed {
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA_FAILED,
  payload: boolean,
}

export type LoadWorkerDataActions = LoadWorkerData | LoadWorkerDataSuccess | LoadWorkerDataFailed;

export const loadWorkerData = (id: string): LoadWorkerData => ({
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA,
  payload: {
    id,
  },
});

export const loadWorkerDataSuccess = (data: WorkerData): LoadWorkerDataSuccess => ({
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA_SUCCESS,
  payload: data,
});

export const loadWorkerDataFailed = (error: boolean): LoadWorkerDataFailed => ({
  type: LoadWorkerDataActionTypes.LOAD_WORKER_DATA_FAILED,
  payload: error,
});
