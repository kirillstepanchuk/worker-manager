import { WorkerData } from '../../../types/worker';

export enum AddWorkerDataActionTypes {
  ADD_WORKER_DATA = 'ADD_WORKER_DATA',
  ADD_WORKER_DATA_SUCCESS = 'ADD_WORKER_DATA_SUCCESS',
  ADD_WORKER_DATA_FAILED = 'ADD_WORKER_DATA_FAILED',
}

export interface AddWorkerData {
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA,
  payload: FormData,
}

interface AddWorkerDataSuccess {
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA_SUCCESS,
  payload: WorkerData,
}

interface AddWorkerDataFailed {
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA_FAILED,
  payload: boolean,
}

export type AddWorkerDataActions = AddWorkerData | AddWorkerDataSuccess | AddWorkerDataFailed;

export const addWorkerData = (worker: FormData): AddWorkerData => ({
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA,
  payload: worker,
});

export const addWorkerDataSuccess = (worker: WorkerData): AddWorkerDataSuccess => ({
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA_SUCCESS,
  payload: worker,
});

export const addWorkerDataFailed = (error: boolean): AddWorkerDataFailed => ({
  type: AddWorkerDataActionTypes.ADD_WORKER_DATA_FAILED,
  payload: error,
});
