import { Worker } from '../../../types/worker';
import { LoadWorkersDataPayload } from '../../actions/loadWorkersData/loadWorkersData';
import axiosInstance from '../../../config';

// eslint-disable-next-line import/prefer-default-export
export const loadWorkers = async (payload: LoadWorkersDataPayload): Promise<Worker[]> => {
  const url = new URL('/workers');
  url.searchParams.append('pageNumber', String(payload.page));
  url.searchParams.append('positionType', String(payload.filterParameters?.positionType));
  url.searchParams.append('sortingType', String(payload.filterParameters?.sortingType as string));
  url.searchParams.append('time', String(payload.filterParameters?.time));

  const response = await axiosInstance.get(url.toString());

  return response.data;
};
