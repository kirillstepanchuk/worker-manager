import React, {
  ChangeEvent, SyntheticEvent, useCallback, useState,
} from 'react';
import { Dispatch } from 'redux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import AddWorker from '../../../components/pages/AddWorker/AddWorker';
import { addWorkerData } from '../../../store/actions/addWorkerData/addWorkerData';
import { WorkerState } from '../../../types/worker';

const AddWorkerContainer = function () {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [placeNumber, setPlaceNumber] = useState<string>('');
  const [isAdministration, setIsAdministration] = useState<boolean>(true);

  const dispatch: Dispatch = useDispatch();
  const worker: WorkerState = useSelector((state: RootStateOrAny) => state.worker);

  const onSubmitHandler = useCallback(async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: FormData = new FormData(target);

    dispatch(addWorkerData(formData));
  }, []);

  const onChangeFileHandler = useCallback((evt: ChangeEvent<HTMLInputElement>):void => {
    const files = evt.currentTarget.files as FileList;
    setFile(files[0]);
  }, []);

  const setTrueAdministrationValue = useCallback(() => {
    setIsAdministration(true);
  }, []);

  const setFalseAdministrationValue = useCallback(() => {
    setIsAdministration(false);
  }, []);

  const setNameValue = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, []);

  const setSalaryValue = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setSalary(evt.target.value);
  }, []);

  const setPlaceNumberValue = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setPlaceNumber(evt.target.value);
  }, []);

  return (
    <AddWorker
      onSubmitHandler={onSubmitHandler}
      onChangeFileHandler={onChangeFileHandler}
      file={file}
      isAdministration={isAdministration}
      setTrueAdministrationValue={setTrueAdministrationValue}
      setFalseAdministrationValue={setFalseAdministrationValue}
      name={name}
      setNameValue={setNameValue}
      salary={salary}
      setSalaryValue={setSalaryValue}
      placeNumber={placeNumber}
      setPlaceNumberValue={setPlaceNumberValue}
      loading={worker.loading}
      error={worker.error}
    />
  );
};

export default AddWorkerContainer;
