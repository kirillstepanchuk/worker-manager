import { Request } from 'express';
import { ImageFileData } from '../types/ImageFileData';

const express = require('express');
const multer = require('multer');

const {
  handleAddWorker,
  handleUpdateWorker,
  handleGetAllWorkers,
  handleGetWorker,
} = require('../controllers/worker');

const router = express();

const storage = multer.diskStorage({
  destination: (req: Request, file: ImageFileData, cb: (a: null, b: string)=> void) => {
    cb(null, './src/uploads/');
  },
  filename: (req: Request, file: ImageFileData, cb: (a: null, b: string)=> void) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req: Request, file: ImageFileData, cb: (a: null, b: boolean)=> void) => {
  if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg'].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

const type = upload.single('avatar');

router.post('/workers', type, handleAddWorker);
router.patch('/workers/:id', handleUpdateWorker);
router.get('/workers', handleGetAllWorkers);
router.get('/workers/:id', handleGetWorker);

module.exports = router;
