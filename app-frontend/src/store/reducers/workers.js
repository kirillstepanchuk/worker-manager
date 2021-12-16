import initialState from '../initialState';
import { LOAD_WORKERS_DATA_SUCCESS } from '../constants';

const workers = (state = initialState.workers, action = {}) => {
  switch (action.type) {
    case LOAD_WORKERS_DATA_SUCCESS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default workers;
