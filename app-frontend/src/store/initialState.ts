import { InitialState } from '../types/initialState';

const initialState: InitialState = {
  workers: {
    data: [],
    loading: false,
    error: '',
  },
  worker: {
    data: null,
    loading: false,
    error: '',
  },
  filterParameters: {
    data: null,
  },
};

export default initialState;
