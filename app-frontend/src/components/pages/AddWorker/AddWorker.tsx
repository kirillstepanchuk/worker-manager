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
  file: File | null,
  isAdministration: boolean,
  setIsAdministration: (value: boolean) => void,
  name: string,
  setName: (value: string) => void,
  salary: string,
  setSalary: (value: string) => void,
  placeNumber: string,
  setPlaceNumber: (value: string) => void,
  loading: boolean,
  error: string,
}

const AddWorker: FC<AddWorkerProps> = function ({
  onSubmitHandler,
  onChangeFileHandler,
  file,
  isAdministration,
  setIsAdministration,
  name,
  setName,
  salary,
  setSalary,
  placeNumber,
  setPlaceNumber,
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
    <CardContainer
      encType="multipart/form-data"
      method="post"
      onSubmit={onSubmitHandler}
    >
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
              onClick={() => setIsAdministration(true)}
              value="administration"
              control={<Radio />}
              label="Руководство"
            />
            <FormControlLabel
              onClick={() => setIsAdministration(false)}
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
        onChange={(evt) => {
          setName(evt.target.value);
        }}
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
        onChange={(evt) => {
          setSalary(evt.target.value);
        }}
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
              onChange={(evt) => {
                setPlaceNumber(evt.target.value);
              }}
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
