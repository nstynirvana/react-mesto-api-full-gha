const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index');
const { handleErrors } = require('./middlewares/handleErrors');
const NotFoundError = require('./errors/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

const allowedCors = [
  'https://projectmesto.savinova.nomoredomains.work',
  'http://projectmesto.savinova.nomoredomains.work',
  'https://api.projectmesto.savinova.nomoredomains.work',
  'http://api.projectmesto.savinova.nomoredomains.work',
  'http://localhost:3000'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb://127.0.0.1:27017/mestodb',
  {
    useNewUrlParser: true,
  },
  () => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  },
);

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(requestLogger);

app.use(routes);

app.use(errorLogger);

app.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errors());

app.use(handleErrors);
