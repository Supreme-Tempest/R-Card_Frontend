const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const diagnosticsRouter = require('./routes/diagnostics');
const productRouter = require('./routes/products');
const clientsRouter = require('./routes/clients');
const salesRouter = require('./routes/sales');
const EmployeeRouter =require('./routes/Employees');
const middleware = require('./middleware');

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

middleware(app);
app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/', userRouter);
app.use('/diagnostics', diagnosticsRouter);
app.use('/admin', adminRouter);
app.use('/products', productRouter);
app.use('/clients', clientsRouter);
app.use('/sales', salesRouter);
app.use('/Employees',EmployeeRouter);

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
