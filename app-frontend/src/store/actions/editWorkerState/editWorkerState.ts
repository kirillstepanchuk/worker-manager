import { EDIT_WORKER_STATE } from '../../constants';
import { WorkerEdit } from '../../../types/worker';

const editWorkerState = (workerData: WorkerEdit) => ({
  type: EDIT_WORKER_STATE,
  payload: workerData,
});

export default editWorkerState;
