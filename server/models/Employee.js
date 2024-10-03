const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  f_Id: { type: String, required: true },
  f_Image: { type: String },
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true, unique: true },
  f_Mobile: { type: String, required: true },
  f_Designation: { type: String },
  f_gender: { type: String },
  f_Course: { type: String },
  f_Createdate: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
