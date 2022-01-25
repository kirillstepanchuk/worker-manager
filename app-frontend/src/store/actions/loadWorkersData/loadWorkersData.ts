import { Worker } from '../../../types/worker';
import { FilterParameters } from '../../../types/filterParameters';

export enum LoadWorkersDataActionTypes {
  LOAD_WORKERS_DATA = 'LOAD_WORKERS_DATA',
  LOAD_WORKERS_DATA_SUCCESS = 'LOAD_WORKERS_DATA_SUCCESS',
  LOAD_WORKERS_DATA_FAILED = 'LOAD_WORKERS_DATA_FAILED',
}

export interface LoadWorkersDataPayload {
  page: number,
  filterParameters: FilterParameters,
}

export interface LoadWorkersData {
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA,
  payload: LoadWorkersDataPayload,
}

interface LoadWorkersDataSuccess {
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_SUCCESS,
  payload: Worker[],
}

interface LoadWorkersDataFailed {
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_FAILED,
  payload: boolean,
}

export type LoadWorkersDataActions =
  LoadWorkersData |
  LoadWorkersDataSuccess |
  LoadWorkersDataFailed;

export const loadWorkersData = (
  page = 1,
  filterParameters: FilterParameters = null,
): LoadWorkersData => ({
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA,
  payload: {
    page,
    filterParameters,
  },
});

export const loadWorkersDataSuccess = (data: Worker[]): LoadWorkersDataSuccess => ({
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_SUCCESS,
  payload: data,
});

export const loadWorkersDataFailed = (error: boolean): LoadWorkersDataFailed => ({
  type: LoadWorkersDataActionTypes.LOAD_WORKERS_DATA_FAILED,
  payload: error,
});
