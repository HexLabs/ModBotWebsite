const {Router} = require('express');
const router = Router();

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

router.get('/config', (req,res) =>{
    res.render('config');
    res.status(200);
});

module.exports = router;