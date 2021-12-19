import React, { FC } from 'react';

import { HeaderWrapper, Heading, Link } from './style';

interface HeaderProps {
  location: {
    pathname: string;
  }
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
