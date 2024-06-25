'use strict'

let Models = require('../models')

const createLike = (data, res) => {
  new Models.Like(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
      console.log(error);
      res.send({result: 500, error: error.message})
    })
}


const deleteLike = (req, res) => {
  Models.Like.findByIdAndDelete(req.params.id)
   .then(data => res.send({result: 200, data: data}))
   .catch(error => {
     console.log(error);
     res.send({result: 500, error: error.message})
   })
}

module.exports = {
  createLike, deleteLike
}