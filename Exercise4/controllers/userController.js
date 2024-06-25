'use strict'

let Models = require('../models')

const getUser = (res) => {
  Models.User.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const createUser = (data, res) => {
  new Models.User(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const updateUser = (req, res) => {
   Models.User(req.body).findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}

const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id)
   .then(data => res.send({result: 200, data: data}))
   .catch(error => {
     console.log(error);
     res.send({result: 500, error: error.message})
   })
}

module.exports = {
  getUser, createUser, updateUser, deleteUser
}