import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import loadWorkerData from '../../../store/actions/loadWorkerData/loadWorkerData';
import { Worker } from '../../../types/worker';
import BigWorker from '../../../components/modals/BigWorker/BigWorker';

const BigWorkerContainer = function () {
  const { id } = useParams();

  const dispatch = useDispatch();
  const worker:Worker = useSelector((state:RootStateOrAny) => state.worker.data);

  useEffect(() => {
    dispatch(loadWorkerData(id as string));
  }, []);

  return (
    <BigWorker worker={worker} />
  );
};

export default BigWorkerContainer;
