const db = require('./knex');
const sql = require('sqlite3')


function setTicketchannelID(channelID){
    return knex("ticketSystem").insert(channelID);
    
}

async function getTicketchannelID(guildID){
    
   
}



module.exports = {
    getTicketchannelID,
    setTicketchannelID
}