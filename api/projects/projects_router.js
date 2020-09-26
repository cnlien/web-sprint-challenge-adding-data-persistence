const express = require('express');
const Projects = require('./projects_model');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Projects.findById(id)
        .then(project => {
            project
                ? res.status(200).json(project)
                : res.status(404).json({ message: 'Project not found' })
        })
        .catch( err => {
            res.status(500).json({ message: 'There was an issue on the server', error: err.message });
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            tasks
                ? res.status(200).json(tasks)
                : res.status(404).json({ message: 'Could not find any steps for this projects' })
        })
        .catch( err => {
            res.status(500).json({ message: 'There was an error on the server' })
        })
})




module.exports = router;