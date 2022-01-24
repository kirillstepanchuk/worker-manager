import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MockStore } from 'redux-mock-store';

import BigWorkerContainer from '../../BigWorkerContainer';
import { workerMock } from '../../../mocks/store/constants';
import createMockStore, { InitialMockState } from '../../../mocks/store/mockStore';
import { WorkerState } from '../../../store/reducers/worker';
import { LoadWorkerDataActionTypes } from '../../../store/actions/loadWorkerData/loadWorkerData';

let store: MockStore;

const setup = (worker: WorkerState) => {
  const initialState: InitialMockState = {
    worker,
  };
  store = createMockStore(initialState);
  render(<Provider store={store}><BigWorkerContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('Edit worker container', () => {
  it('should show correct worker information', () => {
    setup(workerMock.success);

    expect(screen.getByText('Kirill')).toBeInTheDocument();
    expect(screen.getByText('3232232 BYN')).toBeInTheDocument();
    expect(screen.getByText('Руководство')).toBeInTheDocument();
    expect(screen.getByText('08:00 - 14:00')).toBeInTheDocument();
  });

  it('should dispatch correct action when show worker information', () => {
    setup(workerMock.success);

    const actions = store.getActions();
    expect(actions[0].type).toEqual(LoadWorkerDataActionTypes.LOAD_WORKER_DATA);
  });

  it('should render correct error notification', () => {
    setup(workerMock.failed);

    expect(screen.getByText('Упс... Не получилось загрузить пользователя. Попробуйте позже.')).toBeInTheDocument();
  });

  it('should render loading', () => {
    setup(workerMock.loading);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
