import React, { useState, SyntheticEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { loadWorkersData } from '../store/actions/loadWorkersData/loadWorkersData';
import { setFilterParameters } from '../store/actions/setFilterParameters/setFilterParameters';
import Filtration from '../components/common/Filtration/Filtration';
import { FilterParameters } from '../types/filterParameters';

const FiltrationContainer = function () {
  const [isAll, setIsAll] = useState<boolean>(true);
  const [isAdministration, setIsAdministration] = useState<boolean>(false);
  const [workTimeValue, setWorkTimeValue] = useState<string>('08:00 - 14:00');
  const [lunchTimeValue, setLunchTimeValue] = useState<string>('12:00 - 12:45');

  const dispatch: Dispatch = useDispatch();

  const onSubmitHandler = useCallback(async (evt: SyntheticEvent):Promise<void> => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const formData: FilterParameters = Object.fromEntries(new FormData(target));

    dispatch(setFilterParameters(formData));
    dispatch(loadWorkersData(1, formData));
  }, []);

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
