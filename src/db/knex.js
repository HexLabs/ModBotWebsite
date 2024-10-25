// db.js
const knex = require('knex');

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: "../app.sqlite3"
    },
    useNullAsDefault: true,
});

// Test the connection
connectedKnex.raw('SELECT 1')
    .then(() => {
        console.log('Database connected successfully');
        
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

module.exports = connectedKnex;