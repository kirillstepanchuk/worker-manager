import { FilterParameters } from './filterParameters';
import { Worker } from './worker';

export interface InitialState {
  workers: {
    data: Worker[],
    loading: boolean,
    error: string,
  },
  worker: {
    data: Worker | {},
    loading: boolean,
    error: string,
  },
  filterParameters: {
    data: FilterParameters | {}
  }
}
