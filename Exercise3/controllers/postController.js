'use strict'
const Models = require("../models")

const getPost = (res) => {
  Models.Post.findAll({}).then(data => {
    res.send({result: 200, data: data})
  }).catch(error => {
    console.log(error)
    res.send({result: 500, error: error.message})
  })
}

const createPost = (data, res) => {
  Models.Post.create(data).then(data => {
    res.send({ result: 200 , data: data});
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  })
}

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id }, returning: true })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPost, createPost, updatePost, deletePost
  }