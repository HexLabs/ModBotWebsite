const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
const db = require('../db/knex');

router.get('/dashboard', (req,res) =>{
    res.status(200).render('dashboard')
});

router.get('/config', (req,res) =>{
    
   getData(2, res, req) 
   
});

async function getData(guildID, res, req){
    db.all('SELECT ticketChannelID FROM ticketSystem WHERE guildID='+guildID, (err,rows)=>{
        if(err){
            console.log(err);
        }
        
        if(rows.length > 0){
          return res.render('config', {messages:req.flash(),ticketChannelIDDB: rows[0].ticketChannelID});
        }else{
           return res.render('config', {
                messages: req.flash(),
                ticketChannelIDDB: null // or whatever default you want to set
            });
        }
    })
}


module.exports = router;