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

export interface WorkerState {
  data: Worker,
  loading: boolean,
  error: boolean
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
  workerData: WorkerEdit,
  id?: string,
}

export interface WorkerData {
  data: Worker
}

export interface WorkersData {
  data: Worker[]
}
