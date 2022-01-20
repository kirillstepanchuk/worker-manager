import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';

import { loadWorkerData } from '../../../store/actions/loadWorkerData/loadWorkerData';
import { WorkerState } from '../../../types/worker';
import BigWorker from '../../../components/pages/BigWorker/BigWorker';

const BigWorkerContainer = function () {
  const { id } = useParams<{ id: string }>();

  const dispatch: Dispatch = useDispatch();
  const worker: WorkerState = useSelector((state:RootStateOrAny) => state.worker);

  useEffect(() => {
    dispatch(loadWorkerData(id as string));
  }, []);

  return (
    <BigWorker
      worker={worker.data}
      loading={worker.loading}
      error={worker.error}
    />
  );
};

export default BigWorkerContainer;
