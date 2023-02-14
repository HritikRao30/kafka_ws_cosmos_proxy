var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var publishRouter = require('./routes/publish');
var kafkaRouter = require('./routes/kafka');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST']
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  //send the json string in the req body tat will get parsed
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/kafka', kafkaRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

module.exports = app;
