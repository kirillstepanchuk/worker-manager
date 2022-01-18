import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import user from '@testing-library/user-event';
import { MockStore } from 'redux-mock-store';

import AddWorkerContainer from '../AddWorkerContainer';
import { workerMock } from '../../../mocks/store/constants';
import createMockStore, { InitialMockState } from '../../../mocks/store/mockStore';
import { WorkerState } from '../../../store/reducers/worker';
import { AddWorkerDataActionTypes } from '../../../store/actions/addWorkerData/addWorkerData';

let store: MockStore;

const setup = (worker: WorkerState) => {
  const initialState: InitialMockState = {
    worker,
  };
  store = createMockStore(initialState);
  render(<Provider store={store}><AddWorkerContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('Add worker container', () => {
  it('should dispatch correct action when submit button is clicked', () => {
    setup(workerMock.initial);

    const submitButton = screen.getByText('Добавить');
    user.click(submitButton);
    const actions = store.getActions();
    expect(actions[0].type).toEqual(AddWorkerDataActionTypes.ADD_WORKER_DATA);
  });

  it('should render correct error notification', () => {
    setup(workerMock.failed);

    expect(screen.getByText('Упс... Не получилось добавить пользователя. Попробуйте позже.')).toBeInTheDocument();
  });

  it('should render loading', () => {
    setup(workerMock.loading);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
