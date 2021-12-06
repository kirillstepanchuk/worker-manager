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
  destination: (req, file, cb) => {
    cb(null, './src/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
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
