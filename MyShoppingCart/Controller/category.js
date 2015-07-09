
var config=require('./config.js');
//var mySqlConnection = require('./Connection.js');
var connection = config.Connection.mySqlConnection();

exports.Details={
   product_list:function(category,onResult){
    var query=connection.query('select sc_name  from ecommerce.subcategory scat inner join ecommerce.category cat on scat.c_id=cat.id where cat.c_name=?',category,function(err,result){
if (err) {
    //code
    console.log(err)
}else{
      console.log(category);
        console.log(result);
        onResult(result);
}
       
        });
   //     console.log(category);
//    onResult(category);
    } 
};


exports.insertCategory={
    
    
    
};

exports.insertSubCategory={
    
    
    
    
};