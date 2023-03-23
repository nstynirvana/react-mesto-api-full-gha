const mongoose = require('mongoose');
const validator = require('validator');

const { validateSchema } = require('../utils/validateSchema');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: { validator: validateSchema, message: 'Неккоректный url' },
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
    },
  },
  password: {
    type: String,
    select: false,
  },
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
