const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
  UserID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  PostID: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
})

module.exports = mongoose.model("like", likeSchema)