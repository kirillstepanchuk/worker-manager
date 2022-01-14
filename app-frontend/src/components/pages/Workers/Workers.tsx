import React from 'react';

import Header from '../../../containers/common/HeaderContainer';
import Filtration from '../../../containers/common/FiltrationContainer';
import WorkerCardList from '../../../containers/common/WorkerCardListContainer';
import PaginationList from '../../../containers/common/PaginationListContainer';

const Workers = function () {
  return (
    <>
      <Header />
      <Filtration />
      <WorkerCardList />
      <PaginationList />
    </>
  );
};

export default Workers;
