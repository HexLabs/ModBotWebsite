const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
const knex = require('../db/knex')
const {setTicketchannelID} = require('../db/dbData')



router.post('/submit-data', (req,res) =>{
    
    const valuesEmpty = Object.values(req.body).every(values => values == "");

    if(!valuesEmpty){
        req.flash('success', "Die Einstellungen wurden gespeichert");
        setTicketchannelID(req.body.ticketChannelIDInput)
        res.redirect('config');
        console.log(req.body);
        
        res.status(200);  
    }else{
        req.flash('error',"Keine Felder enthalten einen Wert!");
        res.status(404);
        return res.redirect('/config');
    }
    
})

module.exports = router;