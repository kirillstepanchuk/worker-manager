export const worker = {
  avatar: 'some-img.png',
  name: 'Kirill',
  positionType: 'administration',
  salary: 3232232,
  time: '08:00 - 14:00',
  __v: 4343,
  _id: 'f322142342r233f',
};

const workerList = [
  {
    avatar: 'some-img.png',
    name: 'Kirill',
    positionType: 'administration',
    salary: 3232232,
    time: '08:00 - 14:00',
    __v: 4343,
    _id: 'f322142342r233f',
  },
  {
    avatar: 'some-img2.png',
    name: 'Max',
    positionType: 'worker',
    salary: 433434,
    time: '12:00 - 12:45',
    __v: 43243,
    _id: '234324322342',
  },
];

export const workerMockList = {
  filled: {
    data: workerList,
    loading: false,
    error: '',
  },
  empty: {
    data: [],
    loading: false,
    error: '',
  },
  failed: {
    data: [],
    loading: false,
    error: 'Error',
  },
  loading: {
    data: [],
    loading: true,
    error: '',
  },
};
