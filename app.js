const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const createError = require('http-errors');
let mongoose = require('mongoose');
const locationsRoute = require('./server/routes/locations');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/ltdb', function(error){
  if(error) console.log(error);
  console.log("Connected to database successfully");
}); 

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");
//app.set("views", path.resolve(__dirname, "views/ejs"))

//log requests
//app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded( {extended : false} ));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', locationsRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


module.exports = app;

