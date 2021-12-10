import { FilterParameters } from './filterParameters'
import { Worker } from './worker'

export interface InitialState {
	workers: {
		data: Worker[]
	},
	worker: {
		data: Worker | {}
	},
	filterParameters: {
		data: FilterParameters | {}
	}
}
