'use strict'
require('dotenv').config();
const fastify = require('./app')

fastify.listen(process.env.SERVER_PORT, () =>
  console.log(`Product Rest API with Fastify listening on port ${process.env.SERVER_PORT}!`),
);