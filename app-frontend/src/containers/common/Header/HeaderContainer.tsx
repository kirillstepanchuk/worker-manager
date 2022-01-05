import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../components/common/Header/Header';
import { Location } from '../../../types/location';

const HeaderContainer = function () {
  const location: Location = useLocation();

  return (
    <Header location={location} />
  );
};

export default HeaderContainer;
