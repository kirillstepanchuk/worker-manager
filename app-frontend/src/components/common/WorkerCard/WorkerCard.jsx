import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CardContainer, NameTitle, TypeTitle, ParameterHeading, ParameterValue, Link, LinkConteiner } from './style';
import { API_URL } from "../../../store/constants";
import { useLocation } from 'react-router-dom';

const WorkerCard = ({worker}) => {
    const [isAdministration, setIsAdministration] = useState(worker.positionType === "administration");
    const location = useLocation();
    
    return (
        <CardContainer>
            <img style={{width: '90px', height: '90px'}} src={`${API_URL}/getImage/${worker.avatar}`} alt="avatar" />
            {/* <NameTitle>{`${worker.name} ${worker.surname} ${worker.lastname}`}</NameTitle> */}
            <NameTitle>{`${worker.name}`}</NameTitle>
            <TypeTitle>
                {isAdministration ? "Руководство" : "Сотрудник"}
            </TypeTitle>
            <ParameterHeading>Зарплата:</ParameterHeading>
            <ParameterValue>{worker.salary} BYN</ParameterValue>
            {isAdministration
            ? 
            <>
                <ParameterHeading>Часы приема:</ParameterHeading>
                <ParameterValue>{worker.time}</ParameterValue>
            </>
            :
            <>
                <ParameterHeading>Обеденное время:</ParameterHeading>
                <ParameterValue>{worker.time}</ParameterValue>
                <ParameterHeading>Номер рабочего места:</ParameterHeading>
                <ParameterValue>{worker.placeNumber}</ParameterValue>
            </>
            }
            <LinkConteiner>
                <Link to={{
                    pathname:`/worker/${worker._id}`,
                    state: { background: location },
                }}>
                    Открыть
                </Link>
                <Link to={{
                    pathname:`/worker-edit/${worker._id}`,
                    state: { background: location },
                }}>
                    Изменить
                </Link>
            </LinkConteiner>
            
        </CardContainer>
    )
}

WorkerCard.propTypes = {
    worker: PropTypes.object,
}

export default WorkerCard
