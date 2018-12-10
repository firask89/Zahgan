const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const CreatorSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ''
  },

  password: {
    type: String,
    default: ''
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});

CreatorSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

CreatorSchema.methods.validPassword = function(password) {
  console.log(password)
  return bcrypt.compareSync(password, this.password);
};

CreatorSchema.methods.generateJwt = function() {
  return jwt.sign({
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
  }, config.jwtSecret);
}

module.exports = mongoose.model('Creator', CreatorSchema);