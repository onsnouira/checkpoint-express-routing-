const express = require ('express');
const app = express();
const routes = require('./routes/index');
var cookieParser = require('cookie-parser');
const port = 3000 ;

// cookie parser middleware
app.use(cookieParser());

app.use(express.static('public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', './views');

// custom middleware to verify the time 
const VerifHours = (req, res, next) => {
    const currentDay = new Date().getDay(); 
    const currentHour = new Date().getHours();
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next();
    } else {
        res.status(403).send('SORRY , ACCESS ALLOWED ONLY WORKING HOURS (MONDAY TO FRIDAY, 9 TO 17).');
        console.log('it s  not between your working hours')
    }
};
app.use(VerifHours);
//setting routes
app.use('/',routes)

// create a server
app.listen(port,() =>{
    console.log('sever is running at port :', port)
})