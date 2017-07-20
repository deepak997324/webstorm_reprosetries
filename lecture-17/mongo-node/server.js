/**
 * Created by deepak on 7/16/17.
 */

var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var database=require('./database');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/',express.static('public_static'));

app.post('/todo/insert',function(req,res){
    console.log('i am inserver insert section');
    console.log(req.body.todo);
    database.insertTodo({task:req.body.todo},function(data){
    res.send(data);
})
});

app.get('/todos/all',function(req,res){
database.findTodo(function(data){
    res.send(data);
})
})




database.connectdb(function(){
    app.listen(5000 || process.env.port,function(){
        console.log('server is listening on port 5000');
    })
})



