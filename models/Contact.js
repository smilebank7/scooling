var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true},
  email:{type:String},
  phone:{type:String},
  datestart:{type:Number},
  dateend:{type:Number},
  price:{type:String},
  bill:{type:String},
  admin:{type:String}

});

var Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
