import { ADD_WORKER_DATA, ADD_WORKER_DATA_SUCCESS, ADD_WORKER_DATA_FAILED } from '../../constants';
import { WorkersData } from '../../../types/worker';

const addWorkerData = (workerData: FormData) => ({
  type: ADD_WORKER_DATA,
  payload: workerData,
});

export const addWorkerDataFailed = (error: string) => ({
  type: ADD_WORKER_DATA_FAILED,
  payload: error,
});

export const addWorkerDataSuccess = (workerData: WorkersData) => ({
  type: ADD_WORKER_DATA_SUCCESS,
  payload: workerData,
});

export default addWorkerData;
