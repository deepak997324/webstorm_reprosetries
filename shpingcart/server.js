/**
 * Created by deepak on 7/15/17.
 */
var express=require('express');
var app=express();
var sql=require('./mysql');
app.use('/',express.static('public_static'));

app.get('/getdata',function(req,res){
    sql.getdata(function(z){
        res.send(z);
    })
    // console.log('i am requested to send data ');
});
app.listen(5000 || process.env,function(){
    console.log('server is listening on port 5000');
})