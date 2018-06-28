const app = require('express')()
const router = require('express').Router()

app.use((req,res,next) => {
  next({status: 404, message: 'Route not found'})
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

module.exports = {
  router
}
