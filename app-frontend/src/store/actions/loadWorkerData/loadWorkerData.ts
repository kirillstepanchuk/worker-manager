import { WorkerData } from '../../../types/worker';
import { LOAD_WORKER_DATA, LOAD_WORKER_DATA_SUCCESS, LOAD_WORKER_DATA_FAILED } from '../../constants';

const loadWorkerData = (id: string) => ({
  type: LOAD_WORKER_DATA,
  id,
});

export const loadWorkerDataFailed = (error: string) => ({
  type: LOAD_WORKER_DATA_FAILED,
  payload: error,
});

export const loadWorkerDataSuccess = (data: WorkerData) => ({
  type: LOAD_WORKER_DATA_SUCCESS,
  payload: data,
});

export default loadWorkerData;
