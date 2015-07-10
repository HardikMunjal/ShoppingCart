
var config=require('./config.js');
//var mySqlConnection = require('./Connection.js');
var connection = config.Connection.mySqlConnection();

exports.Details={
    //Category Listing for a particular category
    subcategory_list:function(category,onResult){
    var query=connection.query('select sc_name  from ecommerce.subcategory scat inner join ecommerce.category cat on scat.c_id=cat.id where cat.c_name=?',category,function(err,result){
         if (err) {
                     console.log(err)
                  }else{
                           console.log(category);
                           console.log(result);
                           onResult(result);
                        }
               });
         console.log(category);
         console.log(query.sql);
//    onResult(category);
    },
    //Template Type Listing for a particular category and subcategory
    template_type_list:function(category,subcategory,onResult){
      console.log(subcategory);
        var query=connection.query('select type_name from ecommerce.product_type ptype inner join ecommerce.category cat on ptype.c_id=cat.id inner join ecommerce.subcategory scat on scat.id=ptype.sc_id  where cat.c_name=? and scat.sc_name=?',[category,subcategory],function(err,result){
         if (err) {
                     console.log(err)
                  }else{
                           console.log(category);
                           console.log(result);
                           onResult(result);
                        }
                  });
         console.log(category);
         console.log(query.sql);
         }
};


exports.insertCategory={
    
    
    
};

exports.insertSubCategory={
    
    
    
    
};