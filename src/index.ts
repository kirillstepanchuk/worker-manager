import { Request, Response } from 'express';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const { APP_PORT, MONGODB_URI } = require('./config');
const router = require('./routes/index');

const app = express();

app.use(cors({
  origin: 'https://workermanager.herokuapp.com',
  preflightContinue: true,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,PUT,PATCH,POST,DELETE',
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.raw());
app.use('/getImage', express.static(path.join(__dirname, 'uploads')));

app.use(router);

app.use(express.static(path.resolve(__dirname, '../app-frontend/dist')));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../app-frontend/dist', 'index.html'));
});

const startServer = async () => {
  try {
    mongoose.connect(
      MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error: unknown) => {
        if (error instanceof Error) {
          console.log('some error happened', error);
        }
        console.log('mongoDB has been connected successfully');
      },
    );

    app.listen(APP_PORT, () => {
      console.info(`server started on port ${APP_PORT}!`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`the ${error} happend with server`);
      console.log(`it means ${error.message}`);
    }
  }
};

startServer();
