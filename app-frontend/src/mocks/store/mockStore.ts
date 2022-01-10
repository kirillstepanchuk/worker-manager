import configureStore from 'redux-mock-store';
import { InitialState } from '../../types/initialState';

const createMockStore = (state: InitialState) => {
  const mockStore = configureStore();
  const store = mockStore(state);
  return store;
};

export default createMockStore;
