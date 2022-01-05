import React, { FC } from 'react';

import { HeaderWrapper, Heading, Link } from './style';
import { Location } from '../../../types/location';

interface HeaderProps {
  location: Location
}

const Header: FC<HeaderProps> = function ({ location }) {
  return (
    <HeaderWrapper>
      <Heading>Сотрудники</Heading>

      <Link
        to={{
          pathname: '/worker-add',
          state: { background: location },
        }}
      >
        Добавить
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
