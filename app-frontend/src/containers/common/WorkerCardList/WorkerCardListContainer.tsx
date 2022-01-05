import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import { Worker } from '../../../types/worker';
import WorkerCardList from '../../../components/common/WorkerCardList/WorkerCardList';

const WorkerCardListContainer = function () {
  const dispatch: Dispatch = useDispatch();
  const workers:Worker[] = useSelector((state:RootStateOrAny) => state.workers.data);

  useEffect(() => {
    dispatch(loadWorkersData());
  }, []);

  return (
    <WorkerCardList workers={workers} />
  );
};

export default WorkerCardListContainer;
