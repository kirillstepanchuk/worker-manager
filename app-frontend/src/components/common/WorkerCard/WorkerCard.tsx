import React, { useState, FC } from 'react';
import { useLocation } from 'react-router-dom';

import {
	CardContainer,
	NameTitle,
	TypeTitle,
	ParameterHeading,
	ParameterValue,
	Link,
	LinkConteiner,
} from './style';
import { API_URL } from '../../../store/constants';

interface IProps {
	worker: {
		avatar: string,
		name: string,
		placeNumber?: string,
		positionType: string,
		salary: number,
		time: string,
		__v: number,
		_id: string,
	}
}

const WorkerCard: FC<IProps> = ({ worker }) => {
	const [isAdministration, setIsAdministration] = useState(
		worker.positionType === 'administration'
	);
	const location = useLocation();

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
			<ParameterValue>{worker.salary} BYN</ParameterValue>
			{isAdministration ? (
				<>
					<ParameterHeading>Часы приема:</ParameterHeading>
					<ParameterValue>{worker.time}</ParameterValue>
				</>
			) : (
				<>
					<ParameterHeading>Обеденное время:</ParameterHeading>
					<ParameterValue>{worker.time}</ParameterValue>
					<ParameterHeading>Номер рабочего места:</ParameterHeading>
					<ParameterValue>{worker.placeNumber}</ParameterValue>
				</>
			)}
			<LinkConteiner>
				<Link
					to={{
						pathname: `/worker/${worker._id}`,
						state: { background: location },
					}}
				>
					Открыть
				</Link>
				<Link
					to={{
						pathname: `/worker-edit/${worker._id}`,
						state: { background: location },
					}}
				>
					Изменить
				</Link>
			</LinkConteiner>
		</CardContainer>
	);
};

export default WorkerCard;
