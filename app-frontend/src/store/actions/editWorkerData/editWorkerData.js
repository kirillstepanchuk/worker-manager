import { EDIT_WORKER_DATA } from '../../constants';

const editWorkerData = (workerData) => ({
  type: EDIT_WORKER_DATA,
  payload: workerData,
});

export default editWorkerData;
