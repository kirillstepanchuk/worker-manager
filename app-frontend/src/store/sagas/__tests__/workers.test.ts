import { runSaga } from 'redux-saga';

import {
  LoadWorkersData, loadWorkersData, loadWorkersDataSuccess, loadWorkersDataFailed,
} from '../../actions/loadWorkersData/loadWorkersData';
import { getWorkersData } from '../workers/workers';
import {
  workerMockList, mockPage, mockFilterPrameters, mockError,
} from '../../../mocks/store/constants';
import * as api from '../api/workers.api';
import { handleError } from '../../utils';

describe('workers saga', () => {
  let fetchWorkers: jest.SpyInstance;

  afterEach(() => {
    fetchWorkers.mockClear();
  });

  describe('load workers', () => {
    const { data } = workerMockList.filled;

    it('should put workers in store', async () => {
      fetchWorkers = jest.spyOn(api, 'loadWorkers')
        .mockImplementation(() => Promise.resolve(data));

      const dispatched: LoadWorkersData[] = [];
      await runSaga({
        dispatch: (action: LoadWorkersData) => dispatched.push(action),
      }, getWorkersData, loadWorkersData(mockPage, mockFilterPrameters)).toPromise();

      expect(fetchWorkers).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(loadWorkersDataSuccess(data));
    });

    it('should throw an error in catch block', async () => {
      fetchWorkers = jest.spyOn(api, 'loadWorkers')
        .mockImplementation(() => Promise.reject(mockError.message));

      const dispatched: LoadWorkersData[] = [];

      await runSaga({
        dispatch: (action: LoadWorkersData) => dispatched.push(action),
      }, getWorkersData, loadWorkersData(mockPage, mockFilterPrameters)).toPromise();

      expect(fetchWorkers).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(loadWorkersDataFailed(handleError(mockError.message)));
    });
  });
});
