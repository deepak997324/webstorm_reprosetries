/**
 * Created by deepak on 7/11/17.
 */
var express=require('express');
var app=express();
var sql=require('./mysql');
app.use('/',express.static('public_static'));

app.get('/postdata',function(req,res){
    sql.save(req.query.todo);
    res.send('data has been saved');


});
app.get('/getdata',function (req,res) {
    sql.get(function(q){
        res.send(q);
    });

});
app.listen(5000,function (req,res) {
    console.log('server is listening on port 5000');
});