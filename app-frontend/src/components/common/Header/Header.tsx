import React, { FC } from 'react';

import { HeaderWrapper, Heading, Link } from './style';

const Header: FC = function () {
  return (
    <HeaderWrapper>
      <Heading>Сотрудники</Heading>

      <Link to="/worker-add">
        Добавить
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
