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

const Worker = model('Worker', WorkerSchema);

const createWorker = (data) => Worker.create(data);

const getWorker = (workerId) => Worker.findOne({ _id: workerId });

const updateWorker = (id, data) => Worker.updateOne({ _id: id }, { ...data });

const getAllWorkes = () => Worker.find({});

const getFilteredWorkers = (pageSize, currentPage, positionType, sortingType, time) => {
  let workers;

  if (positionType === 'all') {
    workers = Worker.find({});
  } else {
    workers = Worker.find({ positionType, time });
  }

  if (sortingType === 'nameSorting') {
    workers.sort({ name: 1 });
  } else {
    workers.sort({ salary: -1 });
  }

  const filtratedWorkers = workers.limit(pageSize).skip(pageSize * (currentPage - 1));

  return filtratedWorkers;
};

module.exports = {
  createWorker,
  getWorker,
  getAllWorkes,
  getFilteredWorkers,
  updateWorker,
  Worker,
};
