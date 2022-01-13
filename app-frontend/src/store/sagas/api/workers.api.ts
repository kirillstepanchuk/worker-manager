import axios from 'axios';

import { Worker } from '../../../types/worker';
import { LoadWorkersDataPayload } from '../../actions/loadWorkersData/loadWorkersData';
import { API_URL } from '../../constants';

const loadWorkers = async (payload: LoadWorkersDataPayload): Promise<Worker[]> => {
  const url = new URL(`${API_URL}/workers`);
  url.searchParams.append('pageNumber', String(payload.page));
  url.searchParams.append('positionType', String(payload.filterParameters.positionType));
  url.searchParams.append('sortingType', String(payload.filterParameters.sortingType as string));
  url.searchParams.append('time', String(payload.filterParameters.time));

  const response = await axios({
    url: url.toString(),
    method: 'GET',
  });

  return response.data;
};

export default loadWorkers;
