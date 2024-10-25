const knex = require('./knex');

function setTicketchannelID(channelID){
    return knex("ticketSystem").insert(channelID);
    
}

function getTicketchannelID(guildID){
    return knex("ticketSystem").select('*').where('guildID', guildID);
}



module.exports = {
    getTicketchannelID,
    setTicketchannelID
}