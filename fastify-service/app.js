const fastify = require('fastify')(
    { logger: true }    
)
//fastify.register(require('fastify-multipart'));
const routes = require('./routes')
fastify.register(routes)
fastify.register(require('fastify-cors'), { 
    // put your options here
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ['Content-Type']
  });
fastify.register(require('fastify-formbody'))

module.exports = fastify