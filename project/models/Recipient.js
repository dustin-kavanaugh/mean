var mongoose = require('mongoose');

var RecipientSchema = new mongoose.Schema({
  given_name: {type: String, lowercase: false, unique: true},
  city: String,
  zipcode: Number,
  // img: { data: Buffer, contentType: String },
  img: String, // this is just going to be a link to an image, which index.ejs will render as img
});


mongoose.model('Recipient', RecipientSchema);