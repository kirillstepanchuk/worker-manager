import React, { useState, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import PaginationContainer from './style';
import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import root from '../../../store/reducers/root';

type RootState = ReturnType<typeof root>;

const PaginationList = function () {
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
    <PaginationContainer>
      <Pagination
        size="small"
        count={10}
        page={currentPage}
        shape="rounded"
        onChange={handleChange}
      />
    </PaginationContainer>
  );
};

export default PaginationList;
