import React, {
  useEffect, useState, SyntheticEvent, ChangeEvent,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { History } from 'history';

import loadWorkerData from '../../../store/actions/loadWorkerData/loadWorkerData';
import { API_URL } from '../../../store/constants';
import editWorkerData from '../../../store/actions/editWorkerData/editWorkerData';
import { Worker, WorkerEdit } from '../../../types/worker';
import EditWorker from '../../../components/modals/EditWorker/EditWorker';

const EditWorkerContainer = function () {
  const dispatch: Dispatch = useDispatch();
  const worker:Worker = useSelector((state:RootStateOrAny) => state.worker.data);

  const [isAdministration, setIsAdministration] = useState<boolean>();

  const { id } = useParams<string>();
  const history: History = useHistory();

  useEffect(() => {
    dispatch(loadWorkerData(id as string));
  }, []);

  const onSubmitHandler = async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: WorkerEdit = Object.fromEntries(new FormData(target));

    await axios({
      method: 'PATCH',
      url: `${API_URL}/workers/${worker._id}`,
      data: formData,
    });
    history.goBack();
  };

  const editWorkerDataHandler = (evt: ChangeEvent<HTMLInputElement>):void => {
    const { target } = evt;
    dispatch(editWorkerData({ [target.name]: target.type === 'number' ? +target.value : target.value }));
  };

  return (
    <EditWorker
      worker={worker}
      onSubmitHandler={onSubmitHandler}
      isAdministration={isAdministration}
      setIsAdministration={setIsAdministration}
      editWorkerDataHandler={editWorkerDataHandler}
    />
  );
};

export default EditWorkerContainer;
