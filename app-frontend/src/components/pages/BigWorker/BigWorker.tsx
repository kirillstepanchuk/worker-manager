import React, { FC } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import {
  CardContainer,
  NameTitle,
  TypeTitle,
  ParameterHeading,
  ParameterValue,
  Link,
} from './style';
import { API_URL } from '../../../store/constants';
import { Worker } from '../../../types/worker';

interface BigWorkerProps {
  worker: Worker,
  loading: boolean,
  error: string,
}

const BigWorker: FC<BigWorkerProps> = function ({
  worker,
  loading,
  error,
}) {
  if (loading) {
    return (
      <CardContainer>
        <LinearProgress />
      </CardContainer>
    );
  }

  if (error) {
    return (
      <CardContainer>
        Упс... Не получилось загрузить пользователя. Попробуйте позже.
        <Link to="/workers">Вернуться</Link>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <img
        width="200px"
        src={`${API_URL}/getImage/${worker.avatar}`}
        alt="avatar"
      />
      <NameTitle>{`${worker.name}`}</NameTitle>
      <TypeTitle>
        {worker.positionType === 'administration'
          ? 'Руководство'
          : 'Сотрудник'}
      </TypeTitle>
      <ParameterHeading>Зарплата:</ParameterHeading>
      <ParameterValue>
        {worker.salary}
        {' '}
        BYN
      </ParameterValue>
      {worker.positionType === 'administration'
        ? (
          <>
            <ParameterHeading>
              Часы приема:
            </ParameterHeading>
            <ParameterValue>
              {worker.time}
            </ParameterValue>
          </>
        )
        : (
          <>
            <ParameterHeading>
              Обеденное время:
            </ParameterHeading>
            <ParameterValue>
              {worker.time}
            </ParameterValue>
            <ParameterHeading>
              Номер рабочего места:
            </ParameterHeading>
            <ParameterValue>
              {worker.placeNumber}
            </ParameterValue>
          </>
        )}
      <Link to="/workers">Вернуться</Link>
    </CardContainer>
  );
};

export default BigWorker;
