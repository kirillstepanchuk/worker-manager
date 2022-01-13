import { InitialState } from '../types/initialState';

const initialState: InitialState = {
  workers: {
    data: [],
    loading: false,
    error: '',
  },
  worker: {
    data: {},
    loading: false,
    error: '',
  },
  filterParameters: {
    data: {},
  },
};

export default initialState;
