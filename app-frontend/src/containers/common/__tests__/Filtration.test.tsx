import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user from '@testing-library/user-event';

import filterParameters from '../../../store/reducers/filterParameters';
import FiltrationContainer from '../FiltrationContainer';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      filterParameters,
    }),
  );
  return store;
};

const setup = () => {
  const store = createTestStore();
  render(<Provider store={store}><FiltrationContainer /></Provider>, { wrapper: MemoryRouter });
};

describe('Filtration container', () => {
  beforeEach(() => {
    setup();
  });

  it('should checked default parameters', () => {
    expect(screen.getByRole('radio', { name: 'Все' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'ФИО' })).toBeChecked();
  });

  it('should show/hide additional parameters depending on the type of worker', () => {
    expect(screen.queryByText('Часы приема:')).not.toBeInTheDocument();
    expect(screen.queryByText('Обеденное время:')).not.toBeInTheDocument();

    user.click(screen.getByRole('radio', { name: 'Руководство' }));
    expect(screen.getByRole('radio', { name: 'Руководство' })).toBeChecked();
    expect(screen.getByText('Часы приема:')).toBeInTheDocument();
    expect(screen.queryByText('Обеденное время:')).not.toBeInTheDocument();

    user.click(screen.getByRole('radio', { name: 'Сотрудники' }));
    expect(screen.getByRole('radio', { name: 'Сотрудники' })).toBeChecked();
    expect(screen.queryByText('Часы приема:')).not.toBeInTheDocument();
    expect(screen.getByText('Обеденное время:')).toBeInTheDocument();
  });
});
