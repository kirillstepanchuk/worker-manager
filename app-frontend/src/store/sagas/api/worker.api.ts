import axios from 'axios';

import {
  Worker, WorkerData, WorkerEdit,
} from '../../../types/worker';
import { EditWorkerData } from '../../actions/editWorkerData/editWorkerData';
import { API_URL } from '../../../constants';

export const loadWorker = async (id: string): Promise<Worker> => {
  const response = await axios({
    url: `${API_URL}/workers/${id}`,
    method: 'GET',
  });

  return response.data;
};

export const addWorker = async (workerData: FormData): Promise<WorkerData> => {
  const response = await axios({
    method: 'POST',
    url: `${API_URL}/workers`,
    data: workerData,
    withCredentials: true,
  });

  return response.data;
};

export const editWorker = async (action: EditWorkerData): Promise<WorkerEdit> => {
  const response = await axios({
    method: 'PATCH',
    url: `${API_URL}/workers/${action.payload.id}`,
    data: action.payload.workerData,
  });

  return response.data;
};
