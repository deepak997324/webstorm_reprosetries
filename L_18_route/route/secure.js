/**
 * Created by deepak on 7/19/17.
 */

var route=require('express').Router();
var pathname='secure';

route.get('/1',function(req,res){
    res.send(pathname+' 1 path');
});
route.get('/2',function(req,res){
    res.send(pathname+' 2 path')
});
module.exports=route;