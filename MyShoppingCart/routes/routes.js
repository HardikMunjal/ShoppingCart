

var category=require('../Controller/category.js');

exports.category_product={
    
    result:function(req,res,next){
     console.log('Coming to the routes');
    var param=req.params.category;
    category.Details.product_list(param,function(result){
        res.end(JSON.stringify(result));
        });
    }
}

