import React, { ChangeEvent, SyntheticEvent, FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
  Container,
  ParametersContainer,
  Title,
  ButtonContainer,
  FormLabel,
  controlProps,
} from './style';

interface FiltrationProps {
  onSubmitHandler: (evt: SyntheticEvent) => void,
  isAll: boolean,
  setIsAll: (value: boolean) => void,
  isAdministration: boolean,
  setIsAdministration: (value: boolean) => void,
  workTimeValue: string,
  setWorkTimeValue: (value: string) => void,
  lunchTimeValue: string,
  setLunchTimeValue: (value: string) => void
}

const Filtration: FC<FiltrationProps> = function ({
  onSubmitHandler,
  isAll,
  setIsAll,
  isAdministration,
  setIsAdministration,
  workTimeValue,
  setWorkTimeValue,
  lunchTimeValue,
  setLunchTimeValue,
}) {
  return (
    <Container
      method="post"
      onSubmit={onSubmitHandler}
    >
      <Title>Основные параметры</Title>
      <ParametersContainer>
        <FormControl component="fieldset">
          <FormLabel>Тип сотрудников:</FormLabel>
          <RadioGroup defaultValue="all" name="positionType">
            <FormControlLabel
              onClick={() => {
                setIsAll(true);
                setIsAdministration(false);
              }}
              value="all"
              control={<Radio sx={controlProps.sx} />}
              label="Все"
            />
            <FormControlLabel
              onClick={() => {
                setIsAdministration(true);
                setIsAll(false);
              }}
              value="administration"
              control={<Radio sx={controlProps.sx} />}
              label="Руководство"
            />
            <FormControlLabel
              onClick={() => {
                setIsAdministration(false);
                setIsAll(false);
              }}
              value="worker"
              control={<Radio sx={controlProps.sx} />}
              label="Сотрудники"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel>Сортировка по:</FormLabel>
          <RadioGroup defaultValue="nameSorting" name="sortingType">
            <FormControlLabel
              value="nameSorting"
              control={<Radio sx={controlProps.sx} />}
              label="ФИО"
            />
            <FormControlLabel
              value="salarySorting"
              control={<Radio sx={controlProps.sx} />}
              label="Зарплате"
            />
          </RadioGroup>
        </FormControl>
      </ParametersContainer>
      <Title>Дополнительные параметры</Title>
      {!isAll && (isAdministration
        ? (
          <ParametersContainer>
            <FormControl component="fieldset">
              <FormLabel>
                Часы приема:
              </FormLabel>
              <RadioGroup
                value={workTimeValue}
                name="time"
                onChange={
                  (event: ChangeEvent<HTMLInputElement>, value: string) => setWorkTimeValue(value)
                }
              >
                <FormControlLabel
                  value="08:00 - 14:00"
                  control={<Radio sx={controlProps.sx} />}
                  label="с 8:00 до 14:00"
                />
                <FormControlLabel
                  value="12:00 - 20:00"
                  control={<Radio sx={controlProps.sx} />}
                  label="с 12:00 до 20:00"
                />
              </RadioGroup>
            </FormControl>
          </ParametersContainer>
        )
        : (
          <ParametersContainer>
            <FormControl component="fieldset">
              <FormLabel>
                Обеденное время:
              </FormLabel>
              <RadioGroup
                value={lunchTimeValue}
                name="time"
                onChange={(event, value) => setLunchTimeValue(value)}
              >
                <FormControlLabel
                  value="12:00 - 12:45"
                  control={<Radio sx={controlProps.sx} />}
                  label="с 12:00 до 12:45"
                />
                <FormControlLabel
                  value="15:00 - 15:45"
                  control={<Radio sx={controlProps.sx} />}
                  label="с 15:00 до 15:45"
                />
              </RadioGroup>
            </FormControl>
          </ParametersContainer>
        ))}
      <ButtonContainer>
        <Button variant="outlined" type="submit">
          Применить
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filtration;
