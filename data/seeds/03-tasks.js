exports.seed = function(knex) {
    return knex('tasks').truncate()
      .then(function () {
        return knex('tasks').insert([
          {
            id: 1,
            project_id: 1,
            step_number: 1,
            description: 'Create a forked copy of this project',
            notes: '',
            complete: false
          },
          {
            id: 2,
            project_id: 1,
            step_number: 2,
            description: 'Add your team lead as collaborator on Github',
            notes: '',
            complete: false
          },
          {
            id: 3,
            project_id: 1,
            step_number: 3,
            description: 'Clone your OWN version of the repository (Not Lambdas by mistake!)',
            notes: '',
            complete: false
          },
          {
            id: 4,
            project_id: 2,
            step_number: 1,
            description: 'Create a new branch',
            notes: '',
            complete: false
          },
          {
            id: 5,
            project_id: 2,
            step_number: 2,
            description: 'Implement the project on your newly created branch, committing changes ',
            notes: '',
            complete: false
          }

        ]);
      });
  };
   