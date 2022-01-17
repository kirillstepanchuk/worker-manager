import React, {
  ChangeEvent, SyntheticEvent, FC,
} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import LinearProgress from '@mui/material/LinearProgress';

import {
  CardContainer,
  TopInfoContainer,
  FileInput,
  Link,
} from './style';

interface AddWorkerProps {
  onSubmitHandler: (evt: SyntheticEvent) => Promise<void>,
  onChangeFileHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  file?: File,
  isAdministration: boolean,
  setTrueAdministrationValue: () => void,
  setFalseAdministrationValue: () => void,
  name: string,
  setNameValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  salary: string,
  setSalaryValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  placeNumber: string,
  setPlaceNumberValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  loading: boolean,
  error: boolean,
}

const AddWorker: FC<AddWorkerProps> = function ({
  onSubmitHandler,
  onChangeFileHandler,
  file,
  isAdministration,
  setTrueAdministrationValue,
  setFalseAdministrationValue,
  name,
  setNameValue,
  salary,
  setSalaryValue,
  placeNumber,
  setPlaceNumberValue,
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
        Упс... Не получилось добавить пользователя. Попробуйте позже.
        <Link to="/workers">Вернуться</Link>
      </CardContainer>
    );
  }

  return (
    <CardContainer onSubmit={onSubmitHandler}>
      <TopInfoContainer>
        <FileInput
          id="avatar"
          name="avatar"
          type="file"
          onChange={onChangeFileHandler}
        />
        <label htmlFor="avatar">
          <Button
            variant="contained"
            component="span"
            startIcon={
              file ? <DownloadDoneIcon /> : <PhotoCamera />
          }
          >
            {file ? 'Загружено' : 'Загрузить'}
          </Button>
        </label>
        <FormControl
          component="fieldset"
          style={{ marginLeft: '20px' }}
        >
          <FormLabel component="legend">
            Тип сотрудников:
          </FormLabel>
          <RadioGroup
            defaultValue="administration"
            name="positionType"
          >
            <FormControlLabel
              onClick={setTrueAdministrationValue}
              value="administration"
              control={<Radio />}
              label="Руководство"
            />
            <FormControlLabel
              onClick={setFalseAdministrationValue}
              value="worker"
              control={<Radio />}
              label="Сотрудники"
            />
          </RadioGroup>
        </FormControl>
      </TopInfoContainer>

      <TextField
        style={{ marginTop: '5px' }}
        fullWidth
        id="standard-basic"
        label="ФИО"
        variant="standard"
        name="name"
        value={name}
        onChange={setNameValue}
      />
      <TextField
        style={{ marginTop: '5px' }}
        fullWidth
        type="number"
        id="standard-basic"
        label="Зарплата"
        variant="standard"
        name="salary"
        value={salary}
        onChange={setSalaryValue}
      />

      {isAdministration
        ? (
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Часы приема:
            </FormLabel>
            <RadioGroup
              defaultValue="08:00 - 14:00"
              name="time"
            >
              <FormControlLabel
                value="08:00 - 14:00"
                control={<Radio />}
                label="с 8:00 до 14:00"
              />
              <FormControlLabel
                value="12:00 - 20:00"
                control={<Radio />}
                label="с 12:00 до 20:00"
              />
            </RadioGroup>
          </FormControl>
        )
        : (
          <>
            <TextField
              style={{ marginTop: '5px' }}
              fullWidth
              id="standard-basic"
              label="Номер рабочего места"
              type="number"
              variant="standard"
              name="placeNumber"
              value={placeNumber}
              onChange={setPlaceNumberValue}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Обеденное время:
              </FormLabel>
              <RadioGroup
                defaultValue="08:00 - 14:00"
                name="time"
              >
                <FormControlLabel
                  value="08:00 - 14:00"
                  control={<Radio />}
                  label="с 8:00 до 14:00"
                />
                <FormControlLabel
                  value="12:00 - 20:00"
                  control={<Radio />}
                  label="с 12:00 до 20:00"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}

      <Button variant="outlined" type="submit">
        Добавить
      </Button>

      <Link to="/workers">Вернуться</Link>
    </CardContainer>
  );
};

export default AddWorker;
