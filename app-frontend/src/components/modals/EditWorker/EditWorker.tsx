import React, {
  SyntheticEvent, ChangeEvent, FC,
} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { CardContainer, TopInfoContainer } from './style';
import ModalWrapper from '../../../containers/common/ModalWrapper/ModalWrapperContainer';
import { Worker } from '../../../types/worker';

interface EditWorkerProps {
  worker: Worker,
  onSubmitHandler: (evt: SyntheticEvent) => Promise<void>,
  isAdministration: boolean | undefined,
  setIsAdministration: (value: boolean) => void,
  editWorkerDataHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
}

const EditWorker: FC<EditWorkerProps> = function ({
  worker,
  onSubmitHandler,
  isAdministration,
  setIsAdministration,
  editWorkerDataHandler,
}) {
  return (
    <ModalWrapper>
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

        <Button variant="outlined" type="submit">
          Изменить
        </Button>
      </CardContainer>
    </ModalWrapper>
  );
};

export default EditWorker;
