// db.js

const path = require('path')
const dbPath = path.join(__dirname, 'app.db')
const knex = require('knex');
const sqlite3 = require('sqlite3').verbose()
let sql;


const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE,(err) =>{
    if (err){
        console.error(err.message)
    }
})

sql= `CREATE TABLE IF NOT EXISTS ticketSystem(guildID INTEGER PRIMARY KEY, ticketChannelID INTEGER, notifyChannelID INTEGER)`
db.run(sql)

module.exports = db;