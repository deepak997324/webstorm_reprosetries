/**
 * Created by deepak on 7/13/17.
 */
var express=require('express');
var app=express();
var sql=require('./mysql');
app.use('/',express.static('public_static'));

app.post('/studentlogin',function(req,res){
    if(!req.body.username || !req.body.password){
        return res.status(400).send('something wrong with password or username');
    }
    var tablename=req.body.username+req.body.password;
    sql.getinitialstudentdata(tablename,function(x){
        res.send(x);
    });



});
app.post('/studentquery',function(req,res){
    var tablename=req.body.username+req.body.password;
    var yearmonth=req.body.year+'-'+req.body.month;
    sql.getstudentdata(tablename,yearmonth,function(x){
        res.send(x);
    });


});





app.listen(5000 || process.env.port,function(){
    console.log('server is listening to port 5000');
})