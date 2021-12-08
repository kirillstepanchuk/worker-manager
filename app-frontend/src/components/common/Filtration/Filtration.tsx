import React, { useState, SyntheticEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import setFilterParameters from '../../../store/actions/setFilterParameters/setFilterParameters';
import {
	Container,
	ParametersContainer,
	Title,
	ButtonContainer,
	FormLabel,
	controlProps,
} from './style';

const Filtration = () => {
	const [isAdministration, setIsAdministration] = useState(false);
	const [isAll, setIsAll] = useState(true);
	const [workTimeValue, setWorkTimeValue] = useState('08:00 - 14:00');
	const [lunchTimeValue, setLunchTimeValue] = useState('12:00 - 12:45');

	const dispatch = useDispatch();

	const onSubmitHandler = async (evt: SyntheticEvent) => {
		evt.preventDefault();
		const target = evt.target as HTMLFormElement
		const formData = Object.fromEntries(new FormData(target));
		console.log('formData: ', formData);

		dispatch(setFilterParameters(formData));
		dispatch(loadWorkersData(1, formData));
	}

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
							control={<Radio {...controlProps} />}
							label="Все"
						/>
						<FormControlLabel
							onClick={() => {
								setIsAdministration(true);
								setIsAll(false);
							}}
							value="administration"
							control={<Radio {...controlProps} />}
							label="Руководство"
						/>
						<FormControlLabel
							onClick={() => {
								setIsAdministration(false);
								setIsAll(false);
							}}
							value="worker"
							control={<Radio {...controlProps} />}
							label="Сотрудники"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl component="fieldset">
					<FormLabel>Сортировка по:</FormLabel>
					<RadioGroup defaultValue="nameSorting" name="sortingType">
						<FormControlLabel
							value="nameSorting"
							control={<Radio {...controlProps} />}
							label="ФИО"
						/>
						<FormControlLabel
							value="salarySorting"
							control={<Radio {...controlProps} />}
							label="Зарплате"
						/>
					</RadioGroup>
				</FormControl>
			</ParametersContainer>
			<Title>Дополнительные параметры</Title>
			{!isAll &&
				(isAdministration ? (
					<ParametersContainer>
						<FormControl component="fieldset">
							<FormLabel>
								Часы приема:
							</FormLabel>
							<RadioGroup
								value={workTimeValue}
								name="time"
								onChange={(event: ChangeEvent<HTMLInputElement>, value: string) =>
									setWorkTimeValue(value)
								}
							>
								<FormControlLabel
									value="08:00 - 14:00"
									control={<Radio {...controlProps} />}
									label="с 8:00 до 14:00"
								/>
								<FormControlLabel
									value="12:00 - 20:00"
									control={<Radio {...controlProps} />}
									label="с 12:00 до 20:00"
								/>
							</RadioGroup>
						</FormControl>
					</ParametersContainer>
				) : (
					<ParametersContainer>
						<FormControl component="fieldset">
							<FormLabel>
								Обеденное время:
							</FormLabel>
							<RadioGroup
								value={lunchTimeValue}
								name="time"
								onChange={(event, value) =>
									setLunchTimeValue(value)
								}
							>
								<FormControlLabel
									value="12:00 - 12:45"
									control={<Radio {...controlProps} />}
									label="с 12:00 до 12:45"
								/>
								<FormControlLabel
									value="15:00 - 15:45"
									control={<Radio {...controlProps} />}
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
