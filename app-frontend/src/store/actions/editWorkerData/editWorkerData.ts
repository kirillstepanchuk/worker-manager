import { EDIT_WORKER_DATA } from '../../constants';
import { WorkerEdit } from '../../../types/worker';

const editWorkerData = (workerData: WorkerEdit) => ({
  type: EDIT_WORKER_DATA,
  payload: workerData,
});

export default editWorkerData;
