const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.post('/create', (req, res) => {
  Controllers.likeController.createLike(req.body, res)
})

router.delete('/:id', (req, res) => {
  Controllers.likeController.deleteLike(req, res)
})

module.exports = router;