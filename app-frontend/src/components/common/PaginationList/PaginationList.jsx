import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { PaginationContainer } from './style'
import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';

const PaginationList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const filterParameters = useSelector((state) => state.filterParameters.data);
    
    const handleChange = (event, value) => {
        setCurrentPage(value);
        dispatch(loadWorkersData(value, filterParameters));
    };

    return (
        <PaginationContainer>
            <Pagination
                size="small"
                count={10} 
                page={currentPage} 
                shape="rounded" 
                onChange={handleChange}
            />
        </PaginationContainer>
        
    )
}

PaginationList.propTypes = {
    loadWorkersData: PropTypes.func,
}

export default PaginationList

