import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Heading, Link } from './style';

const Header = function () {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Heading>Сотрудники</Heading>

      <Link
        to={{
          pathname: '/worker-add',
          state: { background: location },
        }}
      >
        Добавить
      </Link>
    </HeaderContainer>
  );
};

export default Header;
