const express=require('express');
const dotenv=require('dotenv');
const morgan= require('morgan');
const bodyparser= require('body-parser');
const path=require('path');
const connectDB=require('./server/database/connection');
const app=express();   //initialize this app variable w express application
dotenv.config({path: 'config.env'})
const PORT=process.env.PORT || 8080

// morgan: used to LOG REQUESTS
app.use(morgan('tiny'))

//mongo connection
connectDB();

//parsing rquest to bodyparser using urlencoded
app.use(bodyparser.urlencoded({extended:true})) //parse the request type from urlencoded
//set view engine

app.set("view engine","ejs") //specifying template engine

// below line for refernce if we tend to add another ejs folder inside views folder
// app.set("views",path.resolve(__dirname,"views/ejs"))



// load assets
app.use('/CSS',express.static(path.resolve(__dirname, "assets/css")))

// load js folder
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routerss
app.use('/', require('./server/routes/route'))


const port=3000;

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});