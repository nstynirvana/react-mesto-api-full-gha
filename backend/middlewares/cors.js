const allowedCors = [
  'http://projectmesto.savinova.nomoredomains.work',
  'https://projectmesto.savinova.nomoredomains.work',
  'http://localhost:3001',
  'http://api.projectmesto.savinova.nomoredomains.work',
  'https://api.projectmesto.savinova.nomoredomains.work',
  'http://localhost:3000'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization'],
};

module.exports = corsOptions;
