module.exports = function (app) {
    app.use('/', function (req, res, next) {
        if (localStorage.getItem('user') == '') {
            req.url = '/login';

        } 
        next();
        
    });

    app.use('/login', function (req, res, next) {
        if (localStorage.getItem('user') != '') {
            req.url = '/';
        } 
        //console.log('no login', req.url);
        next();
        
    });
};
