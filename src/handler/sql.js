const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync(':memory:');


database.exec(`CREATE TABLE data(
    ticketChannelID INTEGER,
    guildID INTEGER
    ) STRICT`)

function updateDatabase(){
    
}
