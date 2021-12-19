import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../components/common/Header/Header';

const HeaderContainer = function () {
  const location = useLocation();

  return (
    <Header location={location} />
  );
};

export default HeaderContainer;
