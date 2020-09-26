exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          name: 'Adding Data Persistence Sprint Challenge',
          description: 'Complete all of the tasks for the sprint challenge to move on to the next unit',
          created: Date.now(),
          complete: false
        },
        {
          id: 2,
          name: 'Authentication shennanigans',
          description: 'Learn the next step in the process of node.js',
          created: Date.now(),
          complete: false
        },
      ]);
    });
};
