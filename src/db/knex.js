const knex = require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    connection:{
        filename: "app.db"
    }
});

module.exports = connectedKnex;