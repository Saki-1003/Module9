
function fetchData(req, res) {
  fetch('https://api.fisenko.net/v1/quotes/en')
   .then(response => response.json())
   .then(json => res.json(json))
  }

function fetchPost(req, res) {
  fetch(`http://jsonplaceholder.typicode.com/posts/${req.params.id}`)
   .then(response => response.json())
   .then(json => res.json(json))
  }
function fetchQuery(req, res) {
  console.log(req.query.limit)
  fetch(`http://jsonplaceholder.typicode.com/posts/?_limit=${req.query.limit}`)
   .then(response => response.json())
   .then(json => res.json(json))
  }

module.exports = {fetchData, fetchPost, fetchQuery}
