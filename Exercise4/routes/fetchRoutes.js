const express = require('express')
const router = express.Router()
const Controllers =require('../controllers')

router.get('/', (req,res) => {
  Controllers.fetchController.fetchData(req, res)
})
router.get('/post', (req,res) => {
  Controllers.fetchController.fetchQuery(req, res)
})
router.get('/:id', (req,res) => {
  Controllers.fetchController.fetchPost(req, res)
})



module.exports = router