const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  Title: {type: String, trim: true, required: true },
  Description: {type: String, trim: true, required: true },
  Image: {type: String, trim: true, required: false },
  UserID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

module.exports = mongoose.model("post", postSchema)