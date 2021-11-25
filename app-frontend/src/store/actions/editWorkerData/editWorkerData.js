import { EDIT_WORKER_DATA } from '../../constants';

const editWorkerData = (workerData) => {
    console.log('workerName: ', workerData);
    return {
        type: EDIT_WORKER_DATA,
        payload: workerData,
    }
};

export default editWorkerData;