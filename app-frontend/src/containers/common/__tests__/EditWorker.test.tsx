import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import user from '@testing-library/user-event';
import { MockStore } from 'redux-mock-store';

import EditWorkerContainer from '../../EditWorkerContainer';
import { workerMock } from '../../../mocks/store/constants';
import createMockStore, { InitialMockState } from '../../../mocks/store/mockStore';
import { WorkerState } from '../../../store/reducers/worker';
import { EditWorkerDataActionTypes } from '../../../store/actions/editWorkerData/editWorkerData';
import { LoadWorkerDataActionTypes } from '../../../store/actions/loadWorkerData/loadWorkerData';

let store: MockStore;

const setup = (worker: WorkerState) => {
  const initialState: InitialMockState = {
    worker,
  };
  store = createMockStore(initialState);
  render(<Provider store={store}><EditWorkerContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('Edit worker container', () => {
  it('should dispatch correct actions when show worker information and click submit button', () => {
    setup(workerMock.success);

    const submitButton = screen.getByText('Изменить');
    const actions = store.getActions();
    expect(actions[0].type).toEqual(LoadWorkerDataActionTypes.LOAD_WORKER_DATA);
    user.click(submitButton);
    expect(actions[1].type).toEqual(EditWorkerDataActionTypes.EDIT_WORKER_DATA);
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
