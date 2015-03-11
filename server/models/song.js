'use strict';
//var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  cues : { 
    type : Array
  }


  
});

module.exports = songSchema;
