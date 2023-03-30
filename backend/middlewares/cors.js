const allowedCors = [
  'http://projectmesto.savinova.nomoredomains.work',
  'http://localhost:3000'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = corsOptions;
