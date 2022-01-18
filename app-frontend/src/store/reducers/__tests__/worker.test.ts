import worker, { initialState } from '../worker';
import { loadWorkerData, loadWorkerDataFailed, loadWorkerDataSuccess } from '../../actions/loadWorkerData/loadWorkerData';
import { editWorkerData, editWorkerDataFailed, editWorkerDataSuccess } from '../../actions/editWorkerData/editWorkerData';
import { addWorkerData, addWorkerDataFailed, addWorkerDataSuccess } from '../../actions/addWorkerData/addWorkerData';
import { editWorkerState } from '../../actions/editWorkerState/editWorkerState';
import { workerMock, mockId } from '../../../mocks/store/constants';
import { fromObjectToFormData } from '../../utils';

describe('worker reducer', () => {
  describe('loading should be true', () => {
    it('dispatch LOAD_WORKER_DATA action', () => {
      const reducer = worker(initialState, loadWorkerData(mockId));
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('dispatch EDIT_WORKER_DATA action', () => {
      const reducer = worker(initialState, editWorkerData(workerMock.success.data, mockId));
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('dispatch ADD_WORKER_DATA action', () => {
      const reducer = worker(
        initialState,
        addWorkerData(fromObjectToFormData(workerMock.success.data)),
      );
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe('error should be true', () => {
    it('dispatch LOAD_WORKER_FAILED action', () => {
      const reducer = worker(initialState, loadWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });

    it('dispatch EDIT_WORKER_FAILED action', () => {
      const reducer = worker(initialState, editWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });

    it('dispatch ADD_WORKER_FAILED action', () => {
      const reducer = worker(initialState, addWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });
  });

  describe('data should be', () => {
    it('dispatch LOAD_WORKER_SUCCESS action', () => {
      const reducer = worker(initialState, loadWorkerDataSuccess(workerMock.success));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success,
      });
    });

    it('dispatch EDIT_WORKER_SUCCESS action', () => {
      const reducer = worker(initialState, editWorkerDataSuccess(workerMock.success.data));
      expect(reducer).toEqual({
        ...initialState,
        data: {
          workerData: workerMock.success.data,
        },
      });
    });

    it('dispatch ADD_WORKER_SUCCESS action', () => {
      const reducer = worker(initialState, addWorkerDataSuccess(workerMock.success));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success,
      });
    });

    it('dispatch EDIT_WORKER_STATE action', () => {
      const reducer = worker(initialState, editWorkerState(workerMock.success.data));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success.data,
      });
    });
  });
});
