/**
 * Express server configuration and routes setup.
 * @module Server
 */

const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})
const routes = require('./routes')
const dbconnect = require('./dbConnect')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./Documentation/PF-Docs.json');
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);


app.use(bodyParser.json())
app.use(cookieParser())
app.use('/events', routes.eventRoute)
app.use('/users', routes.userRoute)
app.use('/auth', routes.authRoute)
app.use('/applications', routes.applicationRoute)
app.use('/eventusers', routes.eventUserRoute)

/**
 * Start the server and listen on the specified port.
 * @function
 * @name listen
 * @param {number} PORT - The port number to listen on.
 * @returns {void}
 */
try {
  app.listen(PORT, () =>
    console.log(`Ready to rock on http://localhost:${PORT}`)
  )
} catch (error) {
  console.log(error)
}

app.use(express.json())