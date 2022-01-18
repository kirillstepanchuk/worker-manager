export const mockPage = 1;

export const mockFilterPrameters = {
  positionType: 'all',
  sortingType: 'nameSorting',
};

export const mockId = 'mockId';

export const worker = {
  avatar: 'some-img.png',
  name: 'Kirill',
  positionType: 'administration',
  salary: 3232232,
  time: '08:00 - 14:00',
  __v: 4343,
  _id: 'f322142342r233f',
};

export const workerMock = {
  initial: {
    data: null,
    loading: false,
    error: false,
  },
  success: {
    data: worker,
    loading: false,
    error: false,
  },
  failed: {
    data: null,
    loading: false,
    error: true,
  },
  loading: {
    data: null,
    loading: true,
    error: false,
  },
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
    error: false,
  },
  empty: {
    data: [],
    loading: false,
    error: false,
  },
  failed: {
    data: [],
    loading: false,
    error: true,
  },
  loading: {
    data: [],
    loading: true,
    error: false,
  },
};
