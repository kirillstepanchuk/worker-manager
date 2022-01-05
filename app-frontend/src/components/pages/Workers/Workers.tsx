import React from 'react';

import Header from '../../../containers/common/Header/HeaderContainer';
import Filtration from '../../../containers/common/Filtration/FiltrationContainer';
import WorkerCardList from '../../../containers/common/WorkerCardList/WorkerCardListContainer';
import PaginationList from '../../../containers/common/PaginationList/PaginationListContainer';

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
