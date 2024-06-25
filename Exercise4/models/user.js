const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  Name: {type: String, trim: true, required: true },
  Age: {type: Number, trim: true, required: false },
  Gender: {type: String, trim: true, required: false },
  Email: {type: String, trim: true, required: true, unique: true },
  createdAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model("user", userSchema)