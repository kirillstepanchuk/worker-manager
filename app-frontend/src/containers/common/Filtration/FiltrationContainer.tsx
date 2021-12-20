import React, { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import setFilterParameters from '../../../store/actions/setFilterParameters/setFilterParameters';
import Filtration from '../../../components/common/Filtration/Filtration';

const FiltrationContainer = function () {
  const [isAdministration, setIsAdministration] = useState<boolean>(false);
  const [isAll, setIsAll] = useState<boolean>(true);
  const [workTimeValue, setWorkTimeValue] = useState<string>('08:00 - 14:00');
  const [lunchTimeValue, setLunchTimeValue] = useState<string>('12:00 - 12:45');

  const dispatch = useDispatch();

  const onSubmitHandler = async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(target));

    dispatch(setFilterParameters(formData));
    dispatch(loadWorkersData(1, formData));
  };

  return (
    <Filtration
      onSubmitHandler={onSubmitHandler}
      isAll={isAll}
      setIsAll={setIsAll}
      isAdministration={isAdministration}
      setIsAdministration={setIsAdministration}
      workTimeValue={workTimeValue}
      setWorkTimeValue={setWorkTimeValue}
      lunchTimeValue={lunchTimeValue}
      setLunchTimeValue={setLunchTimeValue}
    />
  );
};

export default FiltrationContainer;
