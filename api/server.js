const express = require('express')

const projectsRouter = require('../api/projects/projects_router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'API is running'})
})

module.exports = server;