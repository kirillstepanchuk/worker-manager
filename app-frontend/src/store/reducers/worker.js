import initialState from '../initialState';
import { LOAD_WORKER_DATA_SUCCESS, EDIT_WORKER_DATA } from '../constants';

const worker = (state = initialState.worker, action) => {
    switch (action.type) {
        case LOAD_WORKER_DATA_SUCCESS:
            return {
                data: action.payload,
            };
        case EDIT_WORKER_DATA:
            return {
                data: { ...state.data, ...action.payload }
            }
        default:
            return state;
    }
};

export default worker;
