/**
* Hostel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      name: { type: 'STRING', required: true },

      nbStars: { type: 'INTEGER', max: 5, min:0, required: true },

      address:{ type: 'STRING', required: true },

      price: 'INTEGER'
  }
};  
