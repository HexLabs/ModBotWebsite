const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
const db = require('../db/knex');

router.get('/dashboard', (req,res) =>{
    res.status(200).render('dashboard')
});

router.get('/config', (req,res) =>{
    db.each('SELECT ticketChannelID FROM ticketSystem WHERE guildID='+1, (err,row)=>{
        if(err){
            console.log(err);
        }else{
            res.render('config', {messages:req.flash(),ticketChannelIDDB: row['ticketChannelID']});
        }
    })
    
   // res.render('config', {messages:req.flash(),ticketChannelIDDB: ticketChannelIDDB});
});

async function getData(guildID){
    const results = await db.getTicketchannelID(guildID)
    return results
}


module.exports = router;