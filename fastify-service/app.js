const fastify = require('fastify')(
    { logger: true }    
);
const routes = require('./routes')
fastify.register(routes)
fastify.register(require('fastify-cors'), { 
    // put your options here
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ['Content-Type']
  });

module.exports = fastify