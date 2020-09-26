
exports.up = function(knex) {
    return(
        knex.schema
            .createTable('projects', tbl => {
                tbl.increments();
                tbl.string('name', 255).notNullable();
                tbl.string('description', 255).notNullable();
                tbl.date('created');
                tbl.boolean('complete', false)
            })
          
            .createTable('steps', tbl => {
                tbl.increments();
                tbl.integer('project_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('projects')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                tbl.integer('step_number');
                tbl.string('description');
                tbl.string('notes');
                tbl.boolean('complete', false);
            })

            .createTable('resources', tbl => {
                tbl.increments();
                tbl.string('name', 255).notNullable();
                tbl.string ('description', 255).notNullable();
                tbl.integer('project_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('projects')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
            })

    )
};

exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExists('projects')
          .dropTableIfExists('steps')
          .dropTableIfExists('resources')
    )  
};
