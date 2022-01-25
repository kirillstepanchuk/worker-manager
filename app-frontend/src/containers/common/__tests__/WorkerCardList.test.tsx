import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import WorkerCardListContainer from '../../WorkerCardListContainer';
import { workerMockList } from '../../../mocks/store/constants';
import createMockStore, { InitialMockState } from '../../../mocks/store/mockStore';
import { WorkersState } from '../../../store/reducers/workers';

const setup = (workers: WorkersState) => {
  const initialState: InitialMockState = {
    workers,
  };
  const store = createMockStore(initialState);
  render(<Provider store={store}><WorkerCardListContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('WorkerCardList container', () => {
  it('should render correct content', () => {
    setup(workerMockList.filled);

    expect(screen.getByText('Kirill')).toBeInTheDocument();
    expect(screen.getByText('3232232 BYN')).toBeInTheDocument();
    expect(screen.getByText('Руководство')).toBeInTheDocument();
    expect(screen.getByText('08:00 - 14:00')).toBeInTheDocument();

    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('433434 BYN')).toBeInTheDocument();
    expect(screen.getByText('Сотрудник')).toBeInTheDocument();
    expect(screen.getByText('12:00 - 12:45')).toBeInTheDocument();
  });

  it('should render correct title, when there is no workers', () => {
    setup(workerMockList.empty);

    expect(screen.getByText('Сотрудников на этой странице нет =(')).toBeInTheDocument();
  });

  it('should render correct error notification', () => {
    setup(workerMockList.failed);

    expect(screen.getByText('Упс... Не получилось загрузить пользователей. Попробуйте позже.')).toBeInTheDocument();
  });

  it('should render loading', () => {
    setup(workerMockList.loading);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
