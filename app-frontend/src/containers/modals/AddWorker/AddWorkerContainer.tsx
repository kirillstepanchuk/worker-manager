import React, {
  ChangeEvent, SyntheticEvent, useState,
} from 'react';
import axios from 'axios';

import { API_URL } from '../../../store/constants';
import AddWorker from '../../../components/modals/AddWorker/AddWorker';

const AddWorkerContainer = function () {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [placeNumber, setPlaceNumber] = useState('');
  const [isAdministration, setIsAdministration] = useState(true);
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const onSubmitHandler = async (evt: SyntheticEvent) => {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const formData = new FormData(target);

    await axios({
      method: 'POST',
      url: `${API_URL}/workers`,
      data: formData,
      withCredentials: true,
    });
    setOpenAlert(true);
  };

  const onChangeFileHandler = (evt: ChangeEvent<HTMLInputElement>) => {
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
