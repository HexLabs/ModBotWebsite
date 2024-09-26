const {Router} = require('express');
const router = Router();


router.post('/submit-data', (req,res) =>{
    res.render('config');
    console.log(req.body);
    res.status(200);   
})

module.exports = router;