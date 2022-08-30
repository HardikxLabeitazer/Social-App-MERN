const express = require('express');
const connectToMongo = require('./db');
connectToMongo();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes')

const app = express();
const port = 6000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(compress());
app.use(helmet())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/',userRoutes);
app.use('/',authRoutes)

app.listen(port,()=>{
    console.log("Example app listening on port 6000")
})