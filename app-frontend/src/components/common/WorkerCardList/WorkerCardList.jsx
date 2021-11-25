import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

import WorkerCard from '../WorkerCard/WorkerCard.jsx';
import loadWorkersData from '../../../store/actions/loadWorkersData/loadWorkersData';
import { Wrapper } from './style'

const WorkerCardList = ({workers, loadWorkersData, setIsBigModalOpen}) => {
    useEffect(() => {
        loadWorkersData();
    }, [])
    
    return (
        <Wrapper>
            {workers.data.length 
            ?
                workers.data.map((worker) => {
                    return <WorkerCard 
                        onClick={()=>{setIsBigModalOpen(true)}} 
                        key={worker._id} 
                        worker={worker} 
                    />
                })
            : 
            <CircularProgress style={{margin: "0 auto"}}/>
            }
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    workers: state.workers,
    filterPrameters: state.filterPrameters,
});

const mapDispatchToProps = (dispatch) => ({
    loadWorkersData: () => dispatch(loadWorkersData()),
});

WorkerCardList.propTypes = {
    workers: PropTypes.object,
    filterPrameters: PropTypes.object,
    loadWorkersData: PropTypes.func,
    setIsBigModalOpen: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCardList);