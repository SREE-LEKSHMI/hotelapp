const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyparser = require ('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyparser.json());

//import routes


const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const priceRoute = require('./routes/price');
app.use('/price', priceRoute);

const bannerRoute = require('./routes/banner');
app.use('/banner', bannerRoute);

const orderdetailsRoute = require('./routes/orderdetails');
app.use('/orderdetails', orderdetailsRoute);

const prepairingRoute = require('./routes/prepairing');
app.use('/prepairing', prepairingRoute);

//import routes sr
const postsavailRoute = require('./routes/postsavail');
const postsdbRoute = require('./routes/postsdb');
const postsftRoute = require('./routes/postsft')
const postsfRoute = require('./routes/postsf');
const postsOfRoute = require('./routes/postsof');
const getpostsRoute = require('./routes/getpost');
const postdbregRoute = require('./routes/postdbreg');

app.use('/postsavail', postsavailRoute);
app.use('/postsdb', postsdbRoute);
app.use('/postsft', postsftRoute);
app.use('/postsf', postsfRoute);
app.use('/postsof', postsOfRoute);
app.use('/getposts', getpostsRoute);
app.use('/postdbreg', postdbregRoute);


//ROUTES
app.get('/',(req, res) => {
    res.send('we are on home')
});


const hotelloginRoute = require('./routes/hotellogin');
app.use('/hotel', hotelloginRoute);

mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },


() => console.log('connect to db!')
);

app.listen(3000); 