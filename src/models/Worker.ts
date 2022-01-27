import { Worker, WorkerEdit } from '../types/Worker';

const { Schema, model } = require('mongoose');

const WorkerSchema = new Schema({
  name: {
    type: String,
  },
  positionType: {
    type: String,
  },
  avatar: {
    type: String,
  },
  salary: {
    type: Number,
  },
  placeNumber: {
    type: String,
  },
  time: {
    type: String,
  },
});

const WorkerModel = model('Worker', WorkerSchema);

const createWorker = (data: Worker):Worker => WorkerModel.create(data);

const getWorker = (workerId: string):Worker => WorkerModel.findOne({ _id: workerId });

const updateWorker = (
  id: string,
  data: WorkerEdit,
):Worker => WorkerModel.updateOne({ _id: id }, { ...data });

const getAllWorkes = ():Worker[] => WorkerModel.find({});

const getFilteredWorkers = (
  pageSize: number,
  currentPage: number,
  positionType: string,
  sortingType: string,
  time: string,
):Worker[] => {
  let workers;

  if (positionType === 'all') {
    workers = WorkerModel.find({});
  } else {
    workers = WorkerModel.find({ positionType, time });
  }

  if (sortingType === 'nameSorting') {
    workers.sort({ name: 1 });
  } else {
    workers.sort({ salary: -1 });
  }

  const filtratedWorkers:Worker[] = workers.limit(pageSize).skip(pageSize * (currentPage - 1));

  return filtratedWorkers;
};

module.exports = {
  createWorker,
  getWorker,
  getAllWorkes,
  getFilteredWorkers,
  updateWorker,
  WorkerModel,
};
