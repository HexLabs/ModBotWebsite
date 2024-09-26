const express = require('express');
const loginRoute = require('./routes/login');
const pagesRoute = require('./routes/pages');
const dataRoute = require('./routes/data');







const app = express();
const PORT = 3001;




app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(require('connect-flash')());


app.use(express.urlencoded({extended:true}));
app.use(dataRoute);
app.use(loginRoute);
app.use(pagesRoute);

app.listen(PORT, () => console.log(`Server wurde gestartet auf Port ${PORT}`))


app.get('/', (req, res) =>{
    res.render('setup');
});



