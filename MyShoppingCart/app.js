
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var route=require('./routes/routes.js');

var app = express();
var mysql=require('mysql');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/addproduct',routes.addproductform)
app.get('/users', user.list);

app.get('/getsubcategory/:category',route.category_product.result);
app.get('/getsubcategory/:category/:subcategory',route.category_product.result);
app.get('/getsubcategory',route.category_product.queryresult);
app.get('/getsubcategory/:category/:subcategory/:template',route.category_product.templateresult)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

