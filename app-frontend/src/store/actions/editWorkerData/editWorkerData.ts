import { EDIT_WORKER_DATA, EDIT_WORKER_DATA_SUCCESS, EDIT_WORKER_DATA_FAILED } from '../../constants';
import { WorkerEdit } from '../../../types/worker';

const editWorkerData = (workerData: WorkerEdit, id: string) => ({
  type: EDIT_WORKER_DATA,
  payload: {
    workerData,
    id,
  },
});

export const editWorkerDataFailed = (error: string) => ({
  type: EDIT_WORKER_DATA_FAILED,
  payload: error,
});

export const editWorkerDataSuccess = (workerData: WorkerEdit, id: string) => ({
  type: EDIT_WORKER_DATA_SUCCESS,
  payload: {
    workerData,
    id,
  },
});

export default editWorkerData;
