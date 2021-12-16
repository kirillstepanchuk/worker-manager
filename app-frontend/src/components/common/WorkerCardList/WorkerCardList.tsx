import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import WorkerCard from '../WorkerCard/WorkerCard';
import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import { Wrapper, TextWrapper } from './style';
import { Worker } from '../../../types/worker';

const WorkerCardList = function () {
  const dispatch = useDispatch();
  const workers:Worker[] = useSelector((state:RootStateOrAny) => state.workers.data);

  useEffect(() => {
    dispatch(loadWorkersData());
  }, []);

  return (
    <Wrapper>
      {workers.length
        ? (
          workers.map((worker) => (
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
