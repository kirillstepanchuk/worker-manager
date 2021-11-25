import React from 'react';
import Filtration from '../../common/Filtration/Filtration.jsx';
import Header from '../../common/Header/Header.jsx';
import PaginationList from '../../common/PaginationList/PaginationList.jsx';
import WorkerCardList from '../../common/WorkerCardList/WorkerCardList.jsx';

const Workers = () => {
    return (
        <>
            <Header />   
            <Filtration />
            <WorkerCardList />
            <PaginationList />
        </>
    )
}

export default Workers;

