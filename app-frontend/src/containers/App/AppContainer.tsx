import React from 'react';
import { useLocation } from 'react-router-dom';

import { Location, Background } from '../../types/location';
import App from '../../components/App/App';

const AppContainer = function () {
  const location: Location = useLocation();
  const background: Background = location.state && location.state.background;

  return (
    <App location={location} background={background} />
  );
};

export default AppContainer;
