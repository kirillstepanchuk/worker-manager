import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ModalWrapperContainer from '../ModalWrapperContainer';

const modalProps = <span>Test content</span>;

const setup = () => {
  render(<ModalWrapperContainer>{modalProps}</ModalWrapperContainer>, { wrapper: MemoryRouter });
};

describe('ModalWrapper container', () => {
  beforeEach(() => {
    setup();
  });

  it('should render correct content', () => {
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
