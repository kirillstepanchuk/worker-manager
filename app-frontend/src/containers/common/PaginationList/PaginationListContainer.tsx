import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import root from '../../../store/reducers/root';
import PaginationList from '../../../components/common/PaginationList/PaginationList';

type RootState = ReturnType<typeof root>;

const PaginationListContainer = function () {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const filterParameters = useSelector(
    (state: RootState) => state.filterParameters,
  );

  const handleChange = (evt: ChangeEvent<any>, value: number) => {
    setCurrentPage(value);
    dispatch(loadWorkersData(value, filterParameters));
  };

  return (
    <PaginationList
      currentPage={currentPage}
      handleChange={handleChange}
    />
  );
};

export default PaginationListContainer;
