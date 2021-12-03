import { LOAD_WORKER_DATA, LOAD_WORKER_DATA_SUCCESS, LOAD_WORKER_DATA_FAILED } from '../../constants';

const loadWorkerData = (id) => ({
  type: LOAD_WORKER_DATA,
  id,
});

export const loadWorkerDataFailed = (error) => ({
  type: LOAD_WORKER_DATA_FAILED,
  payload: error,
});

export const loadWorkerDataSuccess = (data) => ({
  type: LOAD_WORKER_DATA_SUCCESS,
  payload: data,
});

export default loadWorkerData;
