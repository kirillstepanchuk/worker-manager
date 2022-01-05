import React, { FC } from 'react';

import WorkerCard from '../../../containers/common/WorkerCard/WorkerCardContainer';
import { Wrapper, TextWrapper } from './style';
import { Worker } from '../../../types/worker';

interface WorkerCardListProps {
  workers: Worker[]
}

const WorkerCardList: FC<WorkerCardListProps> = function ({
  workers,
}) {
  return (
    <Wrapper>
      {workers.length
        ? (
          workers.map((worker: Worker) => (
            <WorkerCard
              key={worker._id}
              worker={worker}
            />
          ))
        )
        : (
          <TextWrapper>
            Сотрудников на этой странице нет =(
          </TextWrapper>
        )}
    </Wrapper>
  );
};

export default WorkerCardList;
