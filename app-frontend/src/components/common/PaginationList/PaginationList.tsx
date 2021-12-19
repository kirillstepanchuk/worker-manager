import React, { FC, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';

import PaginationContainer from './style';

interface PaginationListProps {
  currentPage: number,
  handleChange: (evt: ChangeEvent<any>, value: number) => void,
}

const PaginationList: FC<PaginationListProps> = function ({
  currentPage,
  handleChange,
}) {
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
