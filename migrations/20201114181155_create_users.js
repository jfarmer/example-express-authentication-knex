// Migrations have an "up" direction and "down" direction where
// the "down" migration undoes the "up" migration. If the up
// migration creates a table, the corresponding down migration
// would drop the table.

// The below corresponds to the following SQL:
//
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   email TEXT UNIQUE NOT NULL,
//   password_digest TEST NOT NULL,
//   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
// );

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.text('email').unique().notNullable();
    table.text('password_digest').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

// The below corresponds to the following SQL:
//
// DROP TABLE users;
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
