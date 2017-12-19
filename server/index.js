const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session');
require('dotenv').config();

const app = express();
const port = 3400;
const Checkforsession = require('./middleware/Checkforsession');
const auth = require('./controllers/authController');
const cart = require('./controllers/cartController');

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(Checkforsession);

app.post('/api/login', auth.login);
app.post('/api/register', auth.register);
app.get('/api/user', auth.getUser);
app.post('/api/signout', auth.signout);

app.get('/api/cart', cart.add);
app.post('/api/cart/checkout', cart.checkout);
app.post('/api/cart', cart.delete);

app.listen(port, ()=>{console.log('Big Brother is listening on port 3400')});



//OMG I DON'T KNOW IF I CAN DO THIS ANYMORE! SO BORED!