import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import loadWorkerData from '../../../store/actions/loadWorkerData/loadWorkerData';
import { CardContainer, NameTitle, TypeTitle, ParameterHeading, ParameterValue } from './style'
import { API_URL } from "../../../store/constants"
import ModalWrapper from '../../common/ModalWrapper/ModalWrapper.jsx';

const BigWorker = ({worker, loadWorkerData}) => {
    const {id} = useParams();

    useEffect(() => {
        loadWorkerData(id);
    }, [])

    return (
        <ModalWrapper>
            <CardContainer>
                {!worker.data.avatar ? <CircularProgress />
                :
                <>
                    <img width="200px" src={`${API_URL}/getImage/${worker.data.avatar}`} alt="avatar" />
                    <NameTitle>{`${worker.data.name}`}</NameTitle>
                    <TypeTitle>
                        {worker.data.positionType === "administration" ? "Руководство" : "Сотрудник"}
                    </TypeTitle>
                    <ParameterHeading>Зарплата:</ParameterHeading>
                    <ParameterValue>{worker.data.salary} BYN</ParameterValue>
                    {worker.data.positionType === "administration"
                    ? 
                    <>
                        <ParameterHeading>Часы приема:</ParameterHeading>
                        <ParameterValue>{worker.data.time}</ParameterValue>
                    </>
                    :
                    <>
                        <ParameterHeading>Обеденное время:</ParameterHeading>
                        <ParameterValue>{worker.data.time}</ParameterValue>
                        <ParameterHeading>Номер рабочего места:</ParameterHeading>
                        <ParameterValue>{worker.data.placeNumber}</ParameterValue>
                    </>
                    }
                </>

                }
            </CardContainer>
        </ModalWrapper>

    )
}

const mapStateToProps = (state) => ({
    worker: state.worker,
});

const mapDispatchToProps = (dispatch) => ({
    loadWorkerData: (id) => dispatch(loadWorkerData(id)),
});

BigWorker.propTypes = {
    worker: PropTypes.object,
    loadWorkerData: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(BigWorker);
