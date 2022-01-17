import { WorkerEdit } from '../../../types/worker';

export enum EditWorkerStateActionTypes {
  EDIT_WORKER_STATE = 'EDIT_WORKER_STATE',
}

interface EditWorkerState {
  type: EditWorkerStateActionTypes.EDIT_WORKER_STATE,
  payload: WorkerEdit,
}

export type EditWorkerStateActions = EditWorkerState;

export const editWorkerState = (workerData: WorkerEdit): EditWorkerState => ({
  type: EditWorkerStateActionTypes.EDIT_WORKER_STATE,
  payload: workerData,
});
