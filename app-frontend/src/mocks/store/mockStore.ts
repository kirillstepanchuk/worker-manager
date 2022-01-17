import configureStore from 'redux-mock-store';

import { FilterParametersState } from '../../store/reducers/filterParameters';
import { WorkerState } from '../../store/reducers/worker';
import { WorkersState } from '../../store/reducers/workers';

export interface InitialMockState {
  workers?: WorkersState,
  worker?: WorkerState,
  filterParameters?: FilterParametersState,
}

const createMockStore = (state: InitialMockState) => {
  const mockStore = configureStore();
  const store = mockStore(state);
  return store;
};

export default createMockStore;
