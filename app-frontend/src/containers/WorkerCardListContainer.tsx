import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { loadWorkersData } from '../store/actions/loadWorkersData/loadWorkersData';
import WorkerCardList from '../components/common/WorkerCardList/WorkerCardList';
import { WorkersState } from '../store/reducers/workers';

const WorkerCardListContainer = function () {
  const dispatch: Dispatch = useDispatch();
  const workers: WorkersState = useSelector((state: RootStateOrAny) => state.workers);

  useEffect(() => {
    dispatch(loadWorkersData());
  }, []);

  return (
    <WorkerCardList
      workers={workers.data}
      loading={workers.loading}
      error={workers.error}
    />
  );
};

export default WorkerCardListContainer;
