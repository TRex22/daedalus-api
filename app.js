var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pjson = require('./package.json');

var routes = require('./routes/index');
var users = require('./routes/users');
var v1 = require('./routes/v1');
var specialRoute = require('./routes/SpecialRoute');

global.appRoot = path.resolve(__dirname);

var app = express();

console.log('Welcome to webbot version: '+ pjson.version);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/v1', v1);
app.use('/v1/SpecialRoute', specialRoute);

app.post('/v1', v1);
app.post('/v1/SpecialRoute', specialRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);

  console.log('404 Error has been hit');
  console.log('req: '+req);
  console.log('res: '+res);
  console.log('next: '+next);
  console.log('err:' + err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
