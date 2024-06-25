const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes')

let dbConnect = require('./dbConnect')

app.use(express.json())
app.use('/user', routes.userRoutes)
app.use('/post', routes.postRoutes)
app.use('/comment', routes.commentRoutes)
app.use('/like', routes.likeRoutes)
app.use('/data', routes.fetchRoutes)

app.get('/', (req, res) => {
  res.json({ message: "Welcome to my MongoDB application."})
})


const PORT = process.env.PORT || 8090

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
