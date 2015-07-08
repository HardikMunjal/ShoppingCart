
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.addproductform = function(req, res){
	  res.render('addproductform', { title: 'Express' });
	};
	