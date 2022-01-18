import { runSaga } from 'redux-saga';

import { LoadWorkersData, loadWorkersData, loadWorkersDataSuccess } from '../../actions/loadWorkersData/loadWorkersData';
import { getWorkersData } from '../workers/workers';
import { workerMockList, mockPage, mockFilterPrameters } from '../../../mocks/store/constants';
import * as api from '../api/workers.api';

describe('get workers saga', () => {
  const { data } = workerMockList.filled;

  it('should put workers in store', async () => {
    const fetchWorkers = jest.spyOn(api, 'loadWorkers')
      .mockImplementation(() => Promise.resolve(data));

    const dispatched: LoadWorkersData[] = [];
    await runSaga({
      dispatch: (action: LoadWorkersData) => dispatched.push(action),
    }, getWorkersData, loadWorkersData(mockPage, mockFilterPrameters)).toPromise();

    expect(fetchWorkers).toHaveBeenCalledTimes(1);
    expect(dispatched[0]).toEqual(loadWorkersDataSuccess(data));
    fetchWorkers.mockClear();
  });
});
