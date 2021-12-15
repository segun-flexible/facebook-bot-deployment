const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require("./src/helpers/logger");
const errorMiddleWare = require("./src/middleware/errorMiddleware");
const homeRouter = require('./src/routes/home/home');


try {

//Require ENV
require("dotenv").config()


const app = express();

//Cors
app.use(cors({origin:"*",credentials:true}))


//Helmet

  app.use(helmet(
  {
    contentSecurityPolicy: false,
  }
))


//Hpp Security
app.use(hpp())

  // view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

  

app.use(express.json({limit:'500mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join('public')));


//Routes
//Home
app.use("/", homeRouter);


//Error Middleware
app.use(errorMiddleWare)

let port = process.env.PORT || 8080;
app.listen(port,()=>console.log("Listening To Port ", port))
  

  process.on('uncaughtException', function (err) {
  logger.debug(err)
    
});

process.on('unhandledRejection', (reason, promise) => {
  logger.debug(reason)
})



  
} catch (error) {
  logger.debug(error)
}

