'use strict'

let Models = require('../models')

const getPost = (res) => {
  Models.Post.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const createPost = (data, res) => {
  new Models.Post(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const updatePost = (req, res) => {
   Models.Post(req.body).findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const deletePost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.id)
   .then(data => res.send({result: 200, data: data}))
   .catch(error => {
     console.log(error);
     res.send({result: 500, error: error.message})
   })
}

module.exports = {
  getPost, createPost, updatePost, deletePost
}