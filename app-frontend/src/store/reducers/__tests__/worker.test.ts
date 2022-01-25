import worker, { initialState } from '../worker';
import { loadWorkerData, loadWorkerDataFailed, loadWorkerDataSuccess } from '../../actions/loadWorkerData/loadWorkerData';
import { editWorkerData, editWorkerDataFailed, editWorkerDataSuccess } from '../../actions/editWorkerData/editWorkerData';
import { addWorkerData, addWorkerDataFailed, addWorkerDataSuccess } from '../../actions/addWorkerData/addWorkerData';
import { editWorkerState } from '../../actions/editWorkerState/editWorkerState';
import { workerMock, mockId } from '../../../mocks/store/constants';
import { fromObjectToFormData } from '../../utils';

const dataState = {
  ...initialState,
  data: null,
  loading: true,
};

const loadingState = {
  ...initialState,
  loading: false,
};

const errorState = {
  ...initialState,
  loading: true,
  error: false,
};

describe('worker reducer', () => {
  describe('loading should be true', () => {
    it('dispatch LOAD_WORKER_DATA action', () => {
      const reducer = worker(loadingState, loadWorkerData(mockId));
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('dispatch EDIT_WORKER_DATA action', () => {
      const reducer = worker(loadingState, editWorkerData(workerMock.success.data, mockId));
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('dispatch ADD_WORKER_DATA action', () => {
      const reducer = worker(
        loadingState,
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
      const reducer = worker(errorState, loadWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });

    it('dispatch EDIT_WORKER_FAILED action', () => {
      const reducer = worker(errorState, editWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });

    it('dispatch ADD_WORKER_FAILED action', () => {
      const reducer = worker(errorState, addWorkerDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });
  });

  describe('data should be', () => {
    it('dispatch LOAD_WORKER_SUCCESS action', () => {
      const reducer = worker(dataState, loadWorkerDataSuccess(workerMock.success.data));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success.data,
      });
    });

    it('dispatch EDIT_WORKER_SUCCESS action', () => {
      const reducer = worker(dataState, editWorkerDataSuccess(workerMock.success.data));
      expect(reducer).toEqual({
        ...initialState,
        data: {
          workerData: workerMock.success.data,
        },
      });
    });

    it('dispatch ADD_WORKER_SUCCESS action', () => {
      const reducer = worker(dataState, addWorkerDataSuccess(workerMock.success));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success,
      });
    });

    it('dispatch EDIT_WORKER_STATE action', () => {
      const reducer = worker(dataState, editWorkerState(workerMock.success.data));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMock.success.data,
      });
    });
  });
});
