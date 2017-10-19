var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var RecipientSchema = new mongoose.Schema({
  given_name: {type: String, lowercase: true, unique: true},
  city: String,
  zipcode: Number,
  img: { data: Buffer, contentType: String },
});


mongoose.model('User', UserSchema);