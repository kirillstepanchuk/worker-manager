import {
  Worker, WorkerData, WorkerEdit,
} from '../../../types/worker';
import { EditWorkerData } from '../../actions/editWorkerData/editWorkerData';
import axiosInstance from '../../../config';

export const loadWorker = async (id: string): Promise<Worker> => {
  const response = await axiosInstance.get(`/workers/${id}`);

  return response.data;
};

export const addWorker = async (workerData: FormData): Promise<WorkerData> => {
  const response = await axiosInstance.post('/workers', {
    data: workerData,
    withCredentials: true,
  });

  return response.data;
};

export const editWorker = async (action: EditWorkerData): Promise<WorkerEdit> => {
  const response = await axiosInstance.patch(`/workers/${action.payload.id}`, {
    data: action.payload.workerData,
  });

  return response.data;
};
