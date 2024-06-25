const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  TextField: {type: String, trim: true, required: true },
  UserID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  PostID: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
})

module.exports = mongoose.model("comment", commentSchema)