const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
const sqlite3 = require('sqlite3').verbose();
let sql;

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

router.get('/config', (req,res) =>{
    res.render('config', {messages:req.flash()});
    res.status(200);
});

function getData(){
    


const db = new sqlite3.Database('./app.db', sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.error(err.message);
});

sql
}

module.exports = router;