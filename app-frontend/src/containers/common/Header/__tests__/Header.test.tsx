import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import user from '@testing-library/user-event';

import HeaderContainer from '../HeaderContainer';

const setup = () => {
  render(<HeaderContainer />, { wrapper: MemoryRouter });
};

describe('Header container', () => {
  beforeEach(() => {
    setup();
  });

  it('should checked default parameters', () => {
    expect(screen.getByText('Добавить')).toBeInTheDocument();
    user.click(screen.getByText('Добавить'));
  });
});
