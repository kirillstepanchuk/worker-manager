import React, {
  SyntheticEvent, ChangeEvent, FC,
} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import { CardContainer, TopInfoContainer, Link } from './style';
import { Worker } from '../../../types/worker';

interface EditWorkerProps {
  worker: Worker,
  onSubmitHandler: (evt: SyntheticEvent) => Promise<void>,
  isAdministration: boolean | undefined,
  setIsAdministration: (value: boolean) => void,
  editWorkerDataHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  loading: boolean,
  error: string,
}

const EditWorker: FC<EditWorkerProps> = function ({
  worker,
  onSubmitHandler,
  isAdministration,
  setIsAdministration,
  editWorkerDataHandler,
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
    <CardContainer
      encType="multipart/form-data"
      method="patch"
      onSubmit={onSubmitHandler}
    >
      <TopInfoContainer>
        <FormControl
          component="fieldset"
          style={{ marginLeft: '20px' }}
        >
          <FormLabel component="legend">
            Тип сотрудников:
          </FormLabel>
          <RadioGroup
            value={worker.positionType || 'administration'}
            name="positionType"
            onChange={(evt) => {
              setIsAdministration(
                evt.target.value === 'administration',
              );
              editWorkerDataHandler(evt);
            }}
          >
            <FormControlLabel
              value="administration"
              control={<Radio />}
              label="Руководство"
            />
            <FormControlLabel
              value="worker"
              control={<Radio />}
              label="Сотрудники"
            />
          </RadioGroup>
        </FormControl>
      </TopInfoContainer>

      <TextField
        value={worker.name || ''}
        style={{ marginTop: '5px' }}
        fullWidth
        id="standard-basic"
        label="ФИО"
        variant="standard"
        name="name"
        onChange={editWorkerDataHandler}
      />
      <TextField
        value={worker.salary || ''}
        style={{ marginTop: '5px' }}
        type="number"
        fullWidth
        id="standard-basic"
        label="Зарплата"
        variant="standard"
        name="salary"
        onChange={editWorkerDataHandler}
      />

      {isAdministration
        ? (
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Часы приема:
            </FormLabel>
            <RadioGroup
              defaultValue={worker.time || ''}
              name="time"
              onChange={editWorkerDataHandler}
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
              value={worker.placeNumber || ''}
              style={{ marginTop: '5px' }}
              fullWidth
              type="number"
              id="standard-basic"
              label="Номер рабочего места"
              variant="standard"
              name="placeNumber"
              onChange={editWorkerDataHandler}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Обеденное время:
              </FormLabel>
              <RadioGroup
                value={worker.time || ''}
                name="time"
                onChange={editWorkerDataHandler}
              >
                <FormControlLabel
                  value="12:00 - 12:45"
                  control={<Radio />}
                  label="с 12:00 до 12:45"
                />
                <FormControlLabel
                  value="15:00 - 15:45"
                  control={<Radio />}
                  label="с 15:00 до 15:45"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
      {loading
        ? (
          <LoadingButton loading variant="outlined">
            Изменить
          </LoadingButton>
        ) : (
          <Button variant="outlined" type="submit">
            Изменить
          </Button>
        )}

      <Link to="/workers">Вернуться</Link>

    </CardContainer>
  );
};

export default EditWorker;
