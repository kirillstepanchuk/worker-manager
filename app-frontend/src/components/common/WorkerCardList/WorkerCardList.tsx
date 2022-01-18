import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import WorkerCard from '../../../containers/common/WorkerCard/WorkerCardContainer';
import { Wrapper, CenterWrapper } from './style';
import { Worker } from '../../../types/worker';

interface WorkerCardListProps {
  workers: Worker[] | null,
  loading: boolean,
  error: boolean,
}

const WorkerCardList: FC<WorkerCardListProps> = function ({
  workers,
  loading,
  error,
}) {
  if (loading) {
    return (
      <Wrapper>
        <CenterWrapper>
          <CircularProgress color="inherit" />
        </CenterWrapper>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <CenterWrapper>
          Упс... Не получилось загрузить пользователей. Попробуйте позже.
        </CenterWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {workers?.length ? (
        workers?.map((worker: Worker) => (
          <WorkerCard
            key={worker._id}
            worker={worker}
          />
        ))
      ) : (
        <CenterWrapper>
          Сотрудников на этой странице нет =(
        </CenterWrapper>
      )}
    </Wrapper>
  );
};

export default WorkerCardList;
