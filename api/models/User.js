/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      firstName: 'STRING',

      lastName: 'STRING',

      age: { type: 'INTEGER', max: 150, required: true },

      birthDate: 'DATE',

      phoneNumber: { type: 'STRING', defaultsTo: '111-222-3333' },

      email: {
        type: 'email',
        unique: true,
        required: true
      },

      password: {
        type: 'string',
        required: true,
        minLength: 6
      }
  },

  beforeCreate: function (attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(attrs.password, salt, function(err, hash) {
        if (err) return next(err);

        attrs.password = hash;
        next();
      });
    });
  }


};
