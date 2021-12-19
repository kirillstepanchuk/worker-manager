import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {
  CardContainer,
  NameTitle,
  TypeTitle,
  ParameterHeading,
  ParameterValue,
} from './style';
import { API_URL } from '../../../store/constants';
import ModalWrapper from '../../../containers/common/ModalWrapper/ModalWrapperContainer';
import { Worker } from '../../../types/worker';

interface BigWorkerProps {
  worker: Worker
}

const BigWorker: FC<BigWorkerProps> = function ({
  worker,
}) {
  return (
    <ModalWrapper>
      <CardContainer>
        {!worker.avatar
          ? (
            <CircularProgress />
          )
          : (
            <>
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
            </>
          )}
      </CardContainer>
    </ModalWrapper>
  );
};

export default BigWorker;
