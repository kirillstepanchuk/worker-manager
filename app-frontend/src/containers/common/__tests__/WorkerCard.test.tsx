import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import WorkerCardContainer from '../../WorkerCardContainer';
import { worker } from '../../../mocks/store/constants';

const setup = () => {
  render(<WorkerCardContainer worker={worker} />, { wrapper: MemoryRouter });
};

describe('WorkerCard container', () => {
  beforeEach(() => {
    setup();
  });

  it('should render correct content', () => {
    expect(screen.getByText('Kirill')).toBeInTheDocument();
    expect(screen.getByText('3232232 BYN')).toBeInTheDocument();
    expect(screen.getByText('Руководство')).toBeInTheDocument();
    expect(screen.getByText('08:00 - 14:00')).toBeInTheDocument();
  });
});
