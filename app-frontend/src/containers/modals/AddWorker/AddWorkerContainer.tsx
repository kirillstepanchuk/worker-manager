import React, {
  ChangeEvent, SyntheticEvent, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import AddWorker from '../../../components/modals/AddWorker/AddWorker';
import addWorkerData from '../../../store/actions/addWorkerData/addWorkerData';

const AddWorkerContainer = function () {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [placeNumber, setPlaceNumber] = useState<string>('');
  const [isAdministration, setIsAdministration] = useState<boolean>(true);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch();

  const handleCloseAlert = ():void => {
    setOpenAlert(false);
  };

  const onSubmitHandler = async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData: FormData = new FormData(target);

    dispatch(addWorkerData(formData));

    setOpenAlert(true);
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
      openAlert={openAlert}
      handleCloseAlert={handleCloseAlert}
    />
  );
};

export default AddWorkerContainer;
