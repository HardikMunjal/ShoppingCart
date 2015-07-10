

var category=require('../Controller/category.js');
var template=require('../Controller/template.js');

exports.category_product={    
    result:function(req,res,next){
    console.log('Coming to the routes');
    var cate=req.params.category;
    var subcate=req.params.subcategory;
    console.log(subcate);
    if (typeof(subcate)=='undefined') {
        console.log('SubCategory Not Selected'); 
        category.Details.subcategory_list(cate,function(result){
        res.end(JSON.stringify(result));
        next();
        });
        //code
    }else{
        console.log('SubCateogry Selected ');
        category.Details.template_type_list(cate,subcate,function(result){
        res.end(JSON.stringify(result));
        
        });
    }
    },
   queryresult :function(req,res,next){
        console.log('Coming to the routes');
        var cate=req.query.category;
        var subcate=req.query.subcategory;
        console.log(subcate);
        if (typeof(subcate)=='undefined') {
        console.log('SubCategory Not Selected'); 
        category.Details.subcategory_list(cate,function(result){
        res.end(JSON.stringify(result));
        next();
        });
        //code
    }else{
        console.log('SubCateogry Selected ');
        category.Details.template_type_list(cate,subcate,function(result){
        res.end(JSON.stringify(result));
        });
    }
    },
    templateresult:function(req,res){
        var temp=req.params.template;
        console.log(temp);
        template.Details.tempalte_Columns(temp,function(result){
            res.end(JSON.stringify(result));
            });
        
    }
    
}

