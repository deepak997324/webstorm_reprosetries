/**
 * Created by deepak on 7/9/17.
 **/

var express = require('express');
var app=express();
var sql = require('./sql.js');
var bodyparser = require('body-parser');
app.use('/',express.static('public_static'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var todolist=[{'task':1},{'task':2}];

app.get('/todos/get',function (req,res) {
    sql.get(function(q){

        res.send(q);
    });
});

//app.post('/todos/post',function(req,res){
//  console.log(req.body.id);
//res.send('done POST');
//});







app.listen(5000,function(){
    console.log('server is listening at port 5000');
})
