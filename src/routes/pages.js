const {Router} = require('express');
const router = Router();

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
    res.status(200);
});

module.exports = router;