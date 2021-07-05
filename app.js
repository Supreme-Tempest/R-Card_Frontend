const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const diagnosticsRouter = require('./routes/diagnostics');
const purchasesRouter = require('./routes/purchases');
const clientsRouter = require('./routes/clients');
const salesRouter = require('./routes/sales');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

//localStorage.setItem('init', 'yes init :v');

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/', userRouter);
app.use('/diagnostics', diagnosticsRouter);
app.use('/purchases', purchasesRouter);
app.use('/clients', clientsRouter);
app.use('/sales', salesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: err.message,
    message: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;
