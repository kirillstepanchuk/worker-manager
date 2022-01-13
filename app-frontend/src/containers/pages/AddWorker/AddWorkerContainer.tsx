import React, {
  ChangeEvent, SyntheticEvent, useState,
} from 'react';
import { Dispatch } from 'redux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import AddWorker from '../../../components/pages/AddWorker/AddWorker';
import addWorkerData from '../../../store/actions/addWorkerData/addWorkerData';
import { WorkerState } from '../../../types/worker';

const AddWorkerContainer = function () {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [placeNumber, setPlaceNumber] = useState<string>('');
  const [isAdministration, setIsAdministration] = useState<boolean>(true);

  const dispatch: Dispatch = useDispatch();
  const worker: WorkerState = useSelector((state:RootStateOrAny) => state.worker);

  const onSubmitHandler = async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: FormData = new FormData(target);

    dispatch(addWorkerData(formData));
  };

  const onChangeFileHandler = (evt: ChangeEvent<HTMLInputElement>):void => {
    const files = evt.currentTarget.files as FileList;
    setFile(files[0]);
  };

  return (
    <AddWorker
      onSubmitHandler={onSubmitHandler}
      onChangeFileHandler={onChangeFileHandler}
      file={file}
      isAdministration={isAdministration}
      setIsAdministration={setIsAdministration}
      name={name}
      setName={setName}
      salary={salary}
      setSalary={setSalary}
      placeNumber={placeNumber}
      setPlaceNumber={setPlaceNumber}
      loading={worker.loading}
      error={worker.error}
    />
  );
};

export default AddWorkerContainer;
