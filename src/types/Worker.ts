export interface Worker {
  name: string,
  positionType: string,
  avatar: string,
  salary: number,
  placeNumber: string,
  time: string,
}

export interface WorkerEdit {
  name?: string,
  positionType?: string,
  avatar?: string,
  salary?: number,
  placeNumber?: string,
  time?: string,
}
