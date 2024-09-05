const {Router} = require('express');
const router = Router();

router.get('/login', (req,res) =>{
    res.send('Login Page');
    res.status(200);
});


module.exports = router;