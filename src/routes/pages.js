const {Router} = require('express');
const router = Router();
const flash = require('express-flash');
//const db = require('./db/dbData');

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

router.get('/config', (req,res) =>{
 //   getData(req.body);
    res.render('config', {messages:req.flash()});
    res.status(200);
});

//function getData(reqbody){
  //  const results = await db.getTicketchannelID(reqbody);
    
//}

module.exports = router;