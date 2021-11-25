import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import setFilterParameters from '../../../store/actions/setFilterParameters/setFilterParameters';
import { Container, ParametersContainer, Title, ButtonContainer, FormLabel, controlProps } from './style';

const Filtration = () => {
    const [isAdministration, setIsAdministration] = useState(false);
    const [isAll, setIsAll] = useState(true);
    const [workTimeValue, setWorkTimeValue] = useState("08:00 - 14:00");
    const [lunchTimeValue, setLunchTimeValue] = useState("12:00 - 12:45");

    const dispatch = useDispatch();
    
    return (
        <Container
            method='post'
            onSubmit={async (evt) => {
                evt.preventDefault();
                const formData = Object.fromEntries(new FormData(evt.target));
                console.log('formData: ', formData);

                dispatch(setFilterParameters(formData));
                dispatch(loadWorkersData(1, formData));
            }}
        >
            <Title>Основные параметры</Title> 
            <ParametersContainer>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Тип сотрудников:</FormLabel>
                    <RadioGroup
                        defaultValue="all"
                        name="positionType"
                    >
                        <FormControlLabel 
                            onClick={() => {
                                setIsAll(true)
                                setIsAdministration(false)
                            }}
                            value="all" 
                            control={<Radio {...controlProps} />} 
                            label="Все" 
                        />
                        <FormControlLabel 
                            onClick={() => {
                                setIsAdministration(true)
                                setIsAll(false)
                            }}
                            value="administration" 
                            control={<Radio {...controlProps} />} 
                            label="Руководство" 
                        />
                        <FormControlLabel
                            onClick={() => {
                                setIsAdministration(false)
                                setIsAll(false)
                            }}
                            value="worker" 
                            control={<Radio {...controlProps} />} 
                            label="Сотрудники" 
                        />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Сортировка по:</FormLabel>
                    <RadioGroup
                        defaultValue="nameSorting"
                        name="sortingType"
                    >
                        <FormControlLabel value="nameSorting" control={<Radio {...controlProps} />} label="ФИО" />
                        <FormControlLabel value="salarySorting" control={<Radio {...controlProps} />} label="Зарплате" />
                    </RadioGroup>
                </FormControl>
            </ParametersContainer>   
            <Title>Дополнительные параметры</Title> 
            {!isAll && (isAdministration
            ?
            <ParametersContainer>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Часы приема:</FormLabel>
                    <RadioGroup
                        value={workTimeValue}
                        name="time"
                        onChange={(event, value) => setWorkTimeValue(value)}
                    >
                        <FormControlLabel value="08:00 - 14:00" control={<Radio {...controlProps} />} label="с 8:00 до 14:00" />
                        <FormControlLabel value="12:00 - 20:00" control={<Radio {...controlProps} />} label="с 12:00 до 20:00" />
                    </RadioGroup>
                </FormControl>
            </ParametersContainer> 
            :
            <ParametersContainer>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Обеденное время:</FormLabel>
                    <RadioGroup
                        value={lunchTimeValue}
                        name="time"
                        onChange={(event, value) => setLunchTimeValue(value)}
                    >
                        <FormControlLabel value="12:00 - 12:45" control={<Radio {...controlProps} />} label="с 12:00 до 12:45" />
                        <FormControlLabel value="15:00 - 15:45" control={<Radio {...controlProps} />} label="с 15:00 до 15:45" />
                    </RadioGroup>
                </FormControl>
            </ParametersContainer> 
            )}
            <ButtonContainer>
                <Button
                    variant="outlined"
                    type="submit" 
                    color="white"
                >
                    Применить
                </Button>
            </ButtonContainer>
        </Container>
    )
}

Filtration.propTypes = {
    loadWorkersData: PropTypes.func,
}


export default Filtration
