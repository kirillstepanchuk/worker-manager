import { FilterParameters } from './filterParameters';

export interface Worker {
  avatar: string,
  name: string,
  placeNumber?: string,
  positionType: string,
  salary: number,
  time: string,
  __v: number,
  _id: string
}

export interface WorkerEdit {
  avatar?: string,
  name?: string,
  placeNumber?: string,
  positionType?: string,
  salary?: number,
  time?: string
}

export interface WorkerEditData {
  data: WorkerEdit
}

export interface WorkerData {
  data: Worker
}

export interface WorkerProps {
  worker: Worker
}

export interface WorkerAction {
  type: string,
  payload?: Worker
}

export interface WorkerIdAction {
  type: string,
  id: string
}

export interface WorkersData {
  data: Worker[]
}

export interface WorkersFiltrateAction {
  type: string,
  payload: {
    page: number,
    filterParameters: FilterParameters
  }
}
