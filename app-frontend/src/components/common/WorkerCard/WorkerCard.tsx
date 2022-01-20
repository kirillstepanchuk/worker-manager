import React, { FC } from 'react';

import {
  CardContainer,
  NameTitle,
  TypeTitle,
  ParameterHeading,
  ParameterValue,
  Link,
  LinkConteiner,
} from './style';
import { API_URL } from '../../../constants';
import { Worker } from '../../../types/worker';

interface WorkerCardProps {
  worker: Worker,
  isAdministration: boolean,
}

const WorkerCard: FC<WorkerCardProps> = function ({
  worker,
  isAdministration,
}) {
  return (
    <CardContainer>
      <img
        style={{ width: '90px', height: '90px' }}
        src={`${API_URL}/getImage/${worker.avatar}`}
        alt="avatar"
      />
      <NameTitle>{`${worker.name}`}</NameTitle>
      <TypeTitle>
        {isAdministration ? 'Руководство' : 'Сотрудник'}
      </TypeTitle>
      <ParameterHeading>Зарплата:</ParameterHeading>
      <ParameterValue>
        {worker.salary}
        {' '}
        BYN
      </ParameterValue>
      {isAdministration
        ? (
          <>
            <ParameterHeading>Часы приема:</ParameterHeading>
            <ParameterValue>{worker.time}</ParameterValue>
          </>
        )
        : (
          <>
            <ParameterHeading>Обеденное время:</ParameterHeading>
            <ParameterValue>{worker.time}</ParameterValue>
            <ParameterHeading>Номер рабочего места:</ParameterHeading>
            <ParameterValue>{worker.placeNumber}</ParameterValue>
          </>
        )}
      <LinkConteiner>
        <Link to={`/worker/${worker._id}`}>
          Открыть
        </Link>
        <Link to={`/worker-edit/${worker._id}`}>
          Изменить
        </Link>
      </LinkConteiner>
    </CardContainer>
  );
};

export default WorkerCard;
