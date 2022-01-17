import { FilterParameters } from './filterParameters';
import { Worker } from './worker';

export interface InitialState {
  workers: {
    data: Worker[] | null,
    loading: boolean,
    error: boolean,
  },
  worker: {
    data: Worker | null,
    loading: boolean,
    error: boolean,
  },
  filterParameters: {
    data: FilterParameters | null,
  }
}
