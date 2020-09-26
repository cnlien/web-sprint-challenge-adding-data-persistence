const knex = require('../../data/dbconfig');

module.exports = {
    find,
    findById,
    findTasks,
    add,
    update,
    remove
}

function find() {
    return knex('projects')
}

function findById(id) {
    return knex('projects').where({ id })
}

function findTasks(id) {
    return (
        knex('tasks')
            .join('projects', 'project.id', '=', 'tasks.project_id')
            .select('tasks.step_number', 'tasks.id', 'projects.name', 'steps.description')
            .where({project_id: id})
            .orderBy('tasks.step_number')
    )
}

function add(projectData) {
    return knex('projects')
        .insert(projectData, 'id')
}

function update(changes, id) {
    return (
        knex('projects')
            .where({ id })
            .update(changes)
    )
}

function remove(id) {
    return(
        knex('projects')
            .where({ id })
            .del()
    )
}
