
const mongoose = require('mongoose');



const brandSchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
      unique: 1 //true
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand