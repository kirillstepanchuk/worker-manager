const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const { APP_PORT } = require('./config');
const router = require('./routes/index');

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
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

const startServer = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://kirill:qawsed@cluster0.zx4sa.mongodb.net/Cluster0?retryWrites=true&w=majority',
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
