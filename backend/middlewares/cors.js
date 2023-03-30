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

module.exports = corsOptions;
