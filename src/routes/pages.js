const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
const db = require('../db/dbData');
const knex = require('../db/knex')

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

router.get('/config', (req,res) =>{
    const ticketChannelIDDB = getData("1")
    res.render('config', [{messages:req.flash()}, {ticketChannelIDDB}]);
    res.status(200);
});

 async function getData(reqbody){
    const results = await db.getTicketchannelID(reqbody)
    return results
}


module.exports = router;