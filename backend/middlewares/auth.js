const jwt = require('jsonwebtoken');

const AuthError = require('../errors/AuthError');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  let payload;

  try {
    const token = authorization.replace('Bearer ', '');

    payload = jwt.verify(token, NODE_ENV ? JWT_SECRET : 'super-secret-key');
  } catch (err) {
    next(new AuthError('Необходима авторизация'));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
