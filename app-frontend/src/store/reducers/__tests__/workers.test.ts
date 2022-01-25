import workers, { initialState } from '../workers';
import { loadWorkersData, loadWorkersDataFailed, loadWorkersDataSuccess } from '../../actions/loadWorkersData/loadWorkersData';
import { mockFilterPrameters, mockPage, workerMockList } from '../../../mocks/store/constants';

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

describe('workers reducer', () => {
  describe('loading should be true', () => {
    it('dispatch LOAD_WORKERS_DATA action', () => {
      const reducer = workers(loadingState, loadWorkersData(mockPage, mockFilterPrameters));
      expect(reducer).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });

  describe('error should be true', () => {
    it('dispatch LOAD_WORKERS_FAILED action', () => {
      const reducer = workers(errorState, loadWorkersDataFailed(true));
      expect(reducer).toEqual({
        ...initialState,
        error: true,
      });
    });
  });

  describe('data should be', () => {
    it('dispatch LOAD_WORKERS_SUCCESS action', () => {
      const reducer = workers(dataState, loadWorkersDataSuccess(workerMockList.filled.data));
      expect(reducer).toEqual({
        ...initialState,
        data: workerMockList.filled.data,
      });
    });
  });
});
