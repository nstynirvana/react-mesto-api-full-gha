const allowedCors = [
  'http://projectmesto.savinova.nomoredomains.work',
  'http://localhost:3001'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: [],
  allowedHeaders: [],
};

module.exports = corsOptions;
