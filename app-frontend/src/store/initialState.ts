import { InitialState } from '../types/initialState';

const initialState: InitialState = {
  workers: {
    data: [],
    loading: false,
    error: true,
  },
  worker: {
    data: null,
    loading: false,
    error: true,
  },
  filterParameters: {
    data: null,
  },
};

export default initialState;
