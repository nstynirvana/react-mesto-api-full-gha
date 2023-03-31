const allowedCors = [
  'http://projectmesto.savinova.nomoredomains.work',
  'https://projectmesto.savinova.nomoredomains.work',
  'http://api.projectmesto.savinova.nomoredomains.work',
  'https://api.projectmesto.savinova.nomoredomains.work',
];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
  // preflightContinue: false,
};

module.exports = corsOptions;
