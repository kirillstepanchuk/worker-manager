import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import loadWorkerData from '../../../store/actions/loadWorkerData/loadWorkerData';
import {
	CardContainer,
	NameTitle,
	TypeTitle,
	ParameterHeading,
	ParameterValue,
} from './style';
import { API_URL } from '../../../store/constants';
import ModalWrapper from '../../common/ModalWrapper/ModalWrapper';

type IWorker = {
	avatar: string,
	name: string,
	placeNumber?: string,
	positionType: string,
	salary: number,
	time: string,
	__v: number,
	_id: string,
}


const BigWorker = () => {
	const { id } = useParams<{id: string}>();
	
	const dispatch = useDispatch()
	const worker:IWorker = useSelector((state:RootStateOrAny) => state.worker.data)

	useEffect(() => {
		dispatch(loadWorkerData(id));
	}, []);

	return (
		<ModalWrapper>
			<CardContainer>
				{!worker.avatar ? (
					<CircularProgress />
				) : (
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
							{worker.salary} BYN
						</ParameterValue>
						{worker.positionType === 'administration' ? (
							<>
								<ParameterHeading>
									Часы приема:
								</ParameterHeading>
								<ParameterValue>
									{worker.time}
								</ParameterValue>
							</>
						) : (
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

