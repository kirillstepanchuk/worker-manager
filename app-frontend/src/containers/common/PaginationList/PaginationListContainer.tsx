import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import root from '../../../store/reducers/root';
import { FilterParameters } from '../../../types/filterParameters';
import PaginationList from '../../../components/common/PaginationList/PaginationList';

type RootState = ReturnType<typeof root>;

const PaginationListContainer = function () {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch: Dispatch = useDispatch();
  const filterParameters: FilterParameters = useSelector(
    (state: RootState) => state.filterParameters.data,
  );

  const handleChange = (evt: ChangeEvent<any>, value: number):void => {
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
