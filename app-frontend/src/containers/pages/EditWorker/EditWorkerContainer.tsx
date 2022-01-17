import React, {
  useEffect, useState, SyntheticEvent, ChangeEvent, useCallback,
} from 'react';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { loadWorkerData } from '../../../store/actions/loadWorkerData/loadWorkerData';
import { editWorkerState } from '../../../store/actions/editWorkerState/editWorkerState';
import { editWorkerData } from '../../../store/actions/editWorkerData/editWorkerData';
import { WorkerState, WorkerEdit } from '../../../types/worker';
import EditWorker from '../../../components/pages/EditWorker/EditWorker';

const EditWorkerContainer = function () {
  const dispatch: Dispatch = useDispatch();
  const worker:WorkerState = useSelector((state:RootStateOrAny) => state.worker);

  const [isAdministration, setIsAdministration] = useState<boolean>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(loadWorkerData(id as string));
  }, []);

  const onSubmitHandler = useCallback(async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: WorkerEdit = Object.fromEntries(new FormData(target));

    dispatch(editWorkerData(formData, worker.data._id));
  }, [worker]);

  const editWorkerDataHandler = useCallback((evt: ChangeEvent<HTMLInputElement>):void => {
    const { target } = evt;
    dispatch(editWorkerState({ [target.name]: target.type === 'number' ? +target.value : target.value }));
  }, []);

  return (
    <EditWorker
      worker={worker.data}
      onSubmitHandler={onSubmitHandler}
      isAdministration={isAdministration}
      setIsAdministration={setIsAdministration}
      editWorkerDataHandler={editWorkerDataHandler}
      loading={worker.loading}
      error={worker.error}
    />
  );
};

export default EditWorkerContainer;
