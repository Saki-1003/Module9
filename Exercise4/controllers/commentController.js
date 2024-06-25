'use strict'

let Models = require('../models')

const getComment = (res) => {
  Models.Comment.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const createComment = (data, res) => {
  new Models.Comment(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const updateComment = (req, res) => {
   Models.Comment(req.body).findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const deleteComment = (req, res) => {
  Models.Comment.findByIdAndDelete(req.params.id)
   .then(data => res.send({result: 200, data: data}))
   .catch(error => {
     console.log(error);
     res.send({result: 500, error: error.message})
   })
}

module.exports = {
  getComment, createComment, updateComment, deleteComment
}