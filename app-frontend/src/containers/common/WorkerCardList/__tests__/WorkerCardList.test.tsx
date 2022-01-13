import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { InitialState } from '../../../../types/initialState';
import WorkerCardListContainer from '../WorkerCardListContainer';
import { workersFilled, workersEmpty } from '../../../../mocks/store/constants';
import createMockStore from '../../../../mocks/store/mockStore';
import { Worker } from '../../../../types/worker';

const setup = (workersList: Worker[]) => {
  const initialState: InitialState = {
    workers: {
      data: workersList,
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
  const store = createMockStore(initialState);
  render(<Provider store={store}><WorkerCardListContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('WorkerCardList container', () => {
  it('should render correct content', () => {
    setup(workersFilled);

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
    setup(workersEmpty);

    expect(screen.getByText('Сотрудников на этой странице нет =(')).toBeInTheDocument();
  });
});
