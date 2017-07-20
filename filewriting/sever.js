/**
 * Created by deepak on 7/8/17.
 */

var express =require('express');
var app =express();
var fs =require('fs');
var todolist=[];

app.use(express.static('public_static'));

app.get('/postData',function(req,res){
    todolist.push(req.query.todo);
    // res.send(todolist);
    fs.appendFile('test1.txt',todolist,function(err){
        if(err) throw err;
    });
    // fs.readFile('test1.txt',function(err,data){
    //     res.writeHead(200,{'content-type':'txt'});
    //     res.send(data);
    //
    // })


});

app.get('/getData',function(req,res){
    res.send();
});

app.listen(5000,function(){
    console.log('app is listening on port 5000');
});
