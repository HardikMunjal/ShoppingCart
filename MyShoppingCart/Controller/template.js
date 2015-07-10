
var config=require('./config.js');
//var mySqlConnection = require('./Connection.js');
var connection = config.Connection.mySqlConnection();

exports.Details={
    //Category Listing for a particular category
    tempalte_Columns:function(template,onResult){
        console.log(template);
    var query=connection.query('select c.column_name from INFORMATION_SCHEMA.COLUMNS c WHERE c.table_name=?',template,function(err,result){
         if (err) {
                     console.log(err)
                  }else{
                           console.log(template);
                           console.log(result);
                           onResult(result);
                        }
               });
         console.log(template);
         console.log(query.sql);
//    onResult(category);
    }
};
exports.insertTemplate={  
};

