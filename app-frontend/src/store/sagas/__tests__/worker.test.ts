import { runSaga } from 'redux-saga';

import {
  LoadWorkerData, loadWorkerData, loadWorkerDataSuccess, loadWorkerDataFailed,
} from '../../actions/loadWorkerData/loadWorkerData';
import {
  AddWorkerData, addWorkerData, addWorkerDataFailed, addWorkerDataSuccess,
} from '../../actions/addWorkerData/addWorkerData';
import {
  editWorkerData, EditWorkerData, editWorkerDataFailed, editWorkerDataSuccess,
} from '../../actions/editWorkerData/editWorkerData';
import { getWorkerData, appendWorkerData, changeWorkerData } from '../workers/worker';
import { workerMock, mockError, mockId } from '../../../mocks/store/constants';
import * as api from '../api/worker.api';
import { fromObjectToFormData, handleError } from '../../utils';

describe('worker saga', () => {
  describe('load worker', () => {
    it('should put worker in store', async () => {
      const fetchWorker = jest.spyOn(api, 'loadWorker')
        .mockImplementation(() => Promise.resolve(workerMock.success.data));

      const dispatched: LoadWorkerData[] = [];

      await runSaga({
        dispatch: (action: LoadWorkerData) => dispatched.push(action),
      }, getWorkerData, loadWorkerData(mockId)).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(loadWorkerDataSuccess(workerMock.success.data));
      fetchWorker.mockClear();
    });

    it('should throw an error in catch block', async () => {
      const fetchWorker = jest.spyOn(api, 'loadWorker')
        .mockImplementation(() => Promise.reject(mockError.message));

      const dispatched: LoadWorkerData[] = [];

      await runSaga({
        dispatch: (action: LoadWorkerData) => dispatched.push(action),
      }, getWorkerData, loadWorkerData(mockId)).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(loadWorkerDataFailed(handleError(mockError.message)));
      fetchWorker.mockClear();
    });
  });

  describe('add worker', () => {
    it('should put new worker in store', async () => {
      const fetchWorker = jest.spyOn(api, 'addWorker')
        .mockImplementation(() => Promise.resolve(workerMock.success));

      const dispatched: AddWorkerData[] = [];

      await runSaga(
        {
          dispatch: (action: AddWorkerData) => dispatched.push(action),
        },
        appendWorkerData,
        addWorkerData(fromObjectToFormData(workerMock.success.data)),
      ).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(addWorkerDataSuccess(workerMock.success));
      fetchWorker.mockClear();
    });

    it('should throw an error in catch block', async () => {
      const fetchWorker = jest.spyOn(api, 'addWorker')
        .mockImplementation(() => Promise.reject(mockError.message));

      const dispatched: AddWorkerData[] = [];

      await runSaga(
        {
          dispatch: (action: AddWorkerData) => dispatched.push(action),
        },
        appendWorkerData,
        addWorkerData(fromObjectToFormData(workerMock.success.data)),
      ).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(addWorkerDataFailed(handleError(mockError.message)));
      fetchWorker.mockClear();
    });
  });

  describe('edit worker', () => {
    it('should put edited worker in store', async () => {
      const fetchWorker = jest.spyOn(api, 'editWorker')
        .mockImplementation(() => Promise.resolve(workerMock.success.data));

      const dispatched: EditWorkerData[] = [];

      await runSaga({
        dispatch: (action: EditWorkerData) => dispatched.push(action),
      }, changeWorkerData, editWorkerData(workerMock.success.data, mockId)).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(editWorkerDataSuccess(workerMock.success.data));
      fetchWorker.mockClear();
    });

    it('should throw an error in catch block', async () => {
      const fetchWorker = jest.spyOn(api, 'editWorker')
        .mockImplementation(() => Promise.reject(mockError.message));

      const dispatched: EditWorkerData[] = [];

      await runSaga({
        dispatch: (action: EditWorkerData) => dispatched.push(action),
      }, changeWorkerData, editWorkerData(workerMock.success.data, mockId)).toPromise();

      expect(fetchWorker).toHaveBeenCalledTimes(1);
      expect(dispatched[0]).toEqual(editWorkerDataFailed(handleError(mockError.message)));
      fetchWorker.mockClear();
    });
  });
});
