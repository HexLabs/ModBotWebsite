const {Router} = require('express');
const router = Router();
const flash = require('express-flash');

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

router.get('/config', (req,res) =>{
    res.render('config', {messages:req.flash()});
    res.status(200);
});

function getData(){
    
}

module.exports = router;