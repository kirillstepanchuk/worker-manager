import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';

import WorkerCard from '../WorkerCard/WorkerCard';
import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import { Wrapper, TextWrapper } from './style';

interface IProps {
	workers: {
		data: {
			avatar: string,
			name: string,
			placeNumber?: string,
			positionType: string,
			salary: number,
			time: string,
			__v: number,
			_id: string,
		}[]
	},
	loadWorkersData: () => void,
}

const WorkerCardList: FC<IProps> = ({ workers, loadWorkersData }) => {
	useEffect(() => {
		loadWorkersData();
	}, []);

	return (
		<Wrapper>
			{workers.data.length ? (
				workers.data.map((worker) => {
					return (
						<WorkerCard
							key={worker._id}
							worker={worker}
						/>
					);
				})
			) : (
				<TextWrapper>Сотрудников на этой странице нет =(</TextWrapper>
			)}
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({
	workers: state.workers,
	filterPrameters: state.filterPrameters,
});

const mapDispatchToProps = (dispatch: any) => ({
	loadWorkersData: () => dispatch(loadWorkersData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCardList);
