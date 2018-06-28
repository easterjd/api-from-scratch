const app = require('express')()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const shortId = require('short-id')
const cors = require('cors')

const port = process.env.PORT || 3000

const errRoutes = require('./routes/errors')
const routes = require('./routes/nasty-comments')
const instructions = require('./routes/instructions')

const listener = () => console.log(`Listening on port ${port}`)

app.use(cors())
app.disable('x-powered-by')
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use('/', instructions)
app.use('/rude', routes)
app.use('/rude', errRoutes)

app.listen(port, listener)

module.exports = app
