import React from 'react';

import Header from '../../../containers/HeaderContainer';
import Filtration from '../../../containers/FiltrationContainer';
import WorkerCardList from '../../../containers/WorkerCardListContainer';
import PaginationList from '../../../containers/PaginationListContainer';

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
